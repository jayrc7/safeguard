import React from 'react';
import { Grid, Button, Popup, Segment, Header} from 'semantic-ui-react'
import Nav from './../nav/Nav'
import AddEventForm from './AddEventForm'
import Event from './Event'
import Map from './Map';
import cookie from 'react-cookies';

import firebase from '../../firebase';

import './HomePage.css'

const db = firebase.firestore();

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      events:[],
      currEventInfo: {
        subject: '',
        date: '',
        description: ''
      }
    };

    this.eventIndex = 0;

    this.updateEventsInfo();
  }

  updateEventsInfo = () => {
    var seconds = Math.floor(new Date() / 1000);

    db.collection("Communities").doc('los angeles').collection(cookie.load("profile").currentCommunity).doc("incidents").get().then((doc) => {
      var tmp = [];
      let i = 0;
      Object.keys(doc.data().events).forEach((key) => {
        tmp.push(doc.data().events[key]);
        tmp[i].passed = Math.floor((seconds - tmp[i].time.seconds) / 60);
      })
      this.setState({
        events: tmp
      })
    })
  }

  addEvent = () => {
    if (this.state.currEventInfo === '') {
      alert('Input something first');
      return;
    }
    const eventInstance = {
      index: this.eventIndex,
      content: this.state.currEventInfo
    };
    this.eventIndex += 1;

    const prevEvent = this.state.events;
    const newEvents = [eventInstance, ...prevEvent];
    const newState = {
      events: newEvents,
      currEventInfo: {
        subject: '',
        date: '',
        description: ''
      }
    };
    this.setState(newState);
  }

  submit = () => {
    for ( let comm of this.state.community ) {
      db.collection("Communities").doc("los angeles").collection(comm).doc(this.props.parent).get().then((doc) => {
        if ( doc.data() !== undefined ) {
          let events = doc.data().events;
          events[this.state.title] = {
            subject: this.state.title,
            description: this.state.description,
            logged: firebase.firestore.FieldValue.serverTimestamp(),
            date: 'this.state.time,'
          }
          db.collection("Communities").doc('los angeles').collection(comm).doc(this.props.parent).update({
            events
          })
        }
        else {
          let events = {};
          events[this.state.title] = {
            subject: this.state.title,
            description: this.state.description,
            date: '2/4/5',
            logged: firebase.firestore.FieldValue.serverTimestamp(),
          }

          db.collection("Communities").doc('los angeles').collection(comm).doc(this.props.parent).set({
            events
          })
        }
      })
    }
  }

  refresh = () => {
    this.setState({})
  }

  render() {
  const events = this.state.events.map((text) => {
    if ( text.passed === undefined ) {
      return <Event subject={text.title} description={text.description}/>;
    }
    else {
      return <Event subject={text.title} date={text.passed+"min ago"} description={text.description}/>;
    }
  })

    return (
      <div>
        <Nav refresh={this.refresh}/>
        <Grid centered='true' padded='true'>
          <Grid.Row columns={2}>
            <Grid.Column width="11">
              <Header as='h3' dividing size='huge'>Safety Map</Header>
              <Map/>
            </Grid.Column>

            <Grid.Column width="5">
              <Header as='h3' dividing size='huge'>Notice Board</Header>
                <Popup flowing='true' keepInViewPort='true' size='huge' position='bottom left'
                  trigger={<Button icon='add' floated='left'/>}
                  content={<AddEventForm parent="incidents"/>}
                  basic
                  on='click'
                  />
                <Segment color='black' style={{overflow:'auto', maxHeight:670}} size='large'>
                  {events}
                </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
