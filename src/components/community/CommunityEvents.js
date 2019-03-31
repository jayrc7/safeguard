import React from 'react';
import { Button, Popup, Segment} from 'semantic-ui-react'
import AddEventForm from './../homepage/AddEventForm'
import Event from './../homepage/Event'

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
  }

  updateCurrEvent(event) {
    const newState = this.event.target.value;
    this.setState(newState);
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
      db.collection("Communities").doc("los angeles").collection(comm).doc("events").get().then((doc) => {
        let events = doc.data().events;
        events[this.state.title] = {
          title: this.state.title,
          description: this.state.description,
          time: firebase.firestore.FieldValue.serverTimestamp(),
        }
        db.collection("Communities").doc('los angeles').collection(comm).doc("events").update({
          events
        })
      })
    }
  }

  render() {
    const events = eventsInfo.map((text) => <Event subject={text.subject} date={text.date} description={text.description}/>)

    return (
      <div>
              <Popup flowing='true' keepInViewPort='true' size='huge' position='bottom left'
                trigger={<Button icon='add' floated='left'/>}
                content={<AddEventForm/>}
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
