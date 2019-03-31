import React from 'react'
import { Button, Checkbox, Form, FormGroup } from 'semantic-ui-react'
import cookie from 'react-cookies';

import firebase from '../../firebase';

const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

class AddEventForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
      community: []
    }
    this.submit = this.submit.bind(this);
  }

  submit = () => {

console.log(this.props.parent)

    for ( let comm of this.state.community ) {
      db.collection("Communities").doc("los angeles").collection(comm).doc(this.props.parent).get().then((doc) => {
        if ( doc.data() !== undefined ) {
          let events = doc.data().events;
          events[this.state.title] = {
            title: this.state.title,
            description: this.state.description,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          }
          db.collection("Communities").doc('los angeles').collection(comm).doc(this.props.parent).update({
            events
          })
        }
        else {
          let events = {};
          events[this.state.title] = {
            title: this.state.title,
            description: this.state.description,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          }
          db.collection("Communities").doc('los angeles').collection(comm).doc(this.props.parent).set({
            events
          })
        }
      })
    }
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    })
  }

  handleDateChange = e => {
    console.log(e.target.value);
    this.setState({
      date: e.target.value
    })
  }

  handleTimeChange = e => {
    console.log(e.target.value);
    this.setState({
      time: e.target.value
    })
  }

  render() {
    const communities = cookie.load("profile").communities.map((community) => 
      <Form.Checkbox label={community} value={community} onClick={(e) => {
        let tmp = this.state.community;
        if ( !tmp.includes(community)) {
          tmp.push(community);
          this.setState({
            community: tmp
          })
        }
        else {
          tmp.splice(tmp.indexOf(community), 1);
          this.setState({
            community: tmp
          })
        }
      }}/>
    )

    if ( this.props.parent === "incidents" ) {
      return (
        <Form>
          <label>Add an Event</label>
          <Form.Field label="Title" 
                      control="input" 
                      value={this.state.title} 
                      onChange={this.handleTitleChange}/>
          <Form.TextArea label='Description'
                      control="input"
                      value={this.state.description}
                      onChange={this.handleDescriptionChange}/>
          <label>Community</label>
          {communities}
          <Button onClick={this.submit}>Submit</Button>
        </Form>
      )
    }
    else {
      return (
        <Form>
          <label>Add an Event</label>
          <Form.Field label="Title" 
                      control="input" 
                      value={this.state.title} 
                      onChange={this.handleTitleChange}/>
          <FormGroup>
            <Form.Field label="Date"
                        control="input"
                        type="date"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        />
            <Form.Field label="Time"
                        control="input"
                        type="time"
                        value={this.state.time}
                        onChange={this.handleTimeChange}
                        />
          </FormGroup>
          <Form.TextArea label='Description'
                      control="input"
                      value={this.state.description}
                      onChange={this.handleDescriptionChange}/>
          <label>Community</label>
          {communities}
          <Button onClick={this.submit}>Submit</Button>
        </Form>
      )
    }
    
  }
}

export default AddEventForm