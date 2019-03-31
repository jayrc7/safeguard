import React from 'react';
import { Button, Popup, Segment} from 'semantic-ui-react'
import AddEventForm from './../homepage/AddEventForm'
import Event from './../homepage/Event'
import cookie from 'react-cookies';

import firebase from '../../firebase';

const db = firebase.firestore();

const eventsInfo = [
  {
    subject: "Nieghborhood Meeting",
    date: "6:30PM 3/30/18",
    description: "Let's talk about what we can do to make this community safer at..."
  },
  {
    subject: "Community Potluck",
    date: "4:00PM 4/3/18",
    description: "Let's get together and bring food for a bonding session at..."
  },
  {
    subject: "PTA Meeting",
    date: "9:00AM 4/9/18",
    description: "Come listen to the local changes being made at our schools."
  }
]

class CommunityEvents extends React.Component {
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
    db.collection("Communities").doc('los angeles').collection(cookie.load("profile").currentCommunity).doc("events").get().then((doc) => {
      var tmp = [];
      Object.keys(doc.data().events).forEach((key) => {
        tmp.push(doc.data().events[key]);
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
    console.log(this.props);

    for ( let comm of this.state.community ) {
      db.collection("Communities").doc("los angeles").collection(comm).doc(this.props.parent).get().then((doc) => {
        if ( doc.data() !== undefined ) {
          let events = doc.data().events;
          events[this.state.title] = {
            title: this.state.title,
            description: this.state.description,
            logged: firebase.firestore.FieldValue.serverTimestamp(),
            time: this.state.time,
            date: this.state.date
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
            logged: firebase.firestore.FieldValue.serverTimestamp(),
            time: this.state.time,
            date: this.state.date
          }
          db.collection("Communities").doc('los angeles').collection(comm).doc(this.props.parent).set({
            events
          })
        }
      })
    }
  }

  render() {
    const events = this.state.events.map((text) => <Event subject={text.title} date={text.date} description={text.description}/>)

    return (
      <div>
        <Popup flowing='true' keepInViewPort='true' size='huge' position='bottom left'
          trigger={<Button icon='add' floated='left'/>}
          content={<AddEventForm parent="events"/>}
          basic
          on='click'
        />
        <Segment style={{overflow:'auto', maxHeight:670, minHeight:670}} size='massive'>
            {events}
        </Segment>
      </div>
    );
  }
}

export default CommunityEvents;
