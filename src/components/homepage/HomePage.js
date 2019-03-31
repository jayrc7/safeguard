import React from 'react';
import { Grid, Button, Popup, Segment, Header} from 'semantic-ui-react'
import Nav from './../nav/Nav'
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

  refresh = () => {
    this.setState({})
  }

  render() {

    var db = firebase.firestore()
    var entries = db.collection("Communities").doc("los angeles").collection("La Tijera Elementary School").doc("incidents").get().then(
        function(doc){
            console.log(doc.data())
            for(let property in doc.data().events){
               let newInfo = {
                   subject: doc.data().events[property].title, 
                   date: "today", 
                   description: doc.data().events[property].description
               }
              
               console.log(newInfo)
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
                <Segment style={{overflow:'auto', maxHeight:670}} size='large'>
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
