import React from 'react';
import { Button, Popup, Segment} from 'semantic-ui-react'
import Nav from './../nav/Nav.jsx'

import AddEventForm from './../homepage/AddEventForm'
import Event from './../homepage/Event'



const eventsInfo = [
  {
    subject: "Tiger sighting",
    date: "2/3/18",
    description: "Come see the tiger!"
  },
  {
    subject: "Tiger sighting2",
    date: "2/3/18",
    description: "Come see the tiger!2"
  },
  {
    subject: "Tiger sighting3",
    date: "2/3/18",
    description: "Come see the tiger!3"
  },
  {
    subject: "Tiger sighting4",
    date: "2/3/18",
    description: "Come see the tiger!4"
  },
  {
    subject: "Tiger sighting5",
    date: "2/3/18",
    description: "Come see the tiger!5"
  },
  {
    subject: "Tiger sighting6",
    date: "2/3/18",
    description: "Come see the tiger!6"
  }
]

class MemberList extends React.Component {
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
              <Segment style={{overflow:'auto', maxHeight:770}} size='massive'>
                  {events}
              </Segment>
      </div>
    );
  }
}

export default MemberList;
