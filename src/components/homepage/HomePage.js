import React from 'react';
import { Grid, Button, Popup, Segment, Header} from 'semantic-ui-react'
import Nav from './../nav/Nav.jsx'
import AddEventForm from './AddEventForm'
import Event from './Event'
import Map from './Map';
import cookie from 'react-cookies';

import firebase from '../../firebase';

import './HomePage.css'

const currEventInfo =
  {
    subject: "Tiger sighting",
    date: "2/3/18",
    description: "Come see the tiger!"
  }

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
  }

  componentWillMount(){
        let currentCommunity = cookie.load('profile').currentCommunity;
        console.log(currentCommunity)
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
        <Nav/>
        <Grid centered='true' padded='true'>
          <Grid.Row columns={2}>
            <Grid.Column width="11">
              <Header as='h3' dividing size='huge'>Safety Map</Header>
              <Map/>
            </Grid.Column>
            <Grid.Column width="5">
              <Popup flowing='true' keepInViewPort='true' size='huge' position='bottom left'
                trigger={<Button icon='add' floated='left'/>}
                content={<AddEventForm/>}
                basic
                on='click'
              />
              <Segment style={{overflow:'auto', maxHeight:770}} size='massive'>
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
