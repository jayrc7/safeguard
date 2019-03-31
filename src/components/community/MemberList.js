import React from 'react';
import { Button, Popup, Segment} from 'semantic-ui-react'
import Nav from './../nav/Nav.js'

import AddEventForm from './../homepage/AddEventForm'
import MemberFeed from './MemberFeed'
import MemberCard from './MemberCard'


const eventsInfo = [
  {
    name: "Jorge Aparicio",
    date: "3/30/19",
    points: "47",
    url: "Come see the tiger!"

  },
  {
    name: "Jason Cabrera",
    date: "3/30/19",
    points: "13",
    url: "Come see the tiger!2"
  },
  {
    name: "Alex Franklin",
    date: "3/30/19",
    points: "47",
    url: "Come see the tiger!3"
  },
  {
    name: "Anson Lee",
    date: "3/30/19",
    points: "123",
    url: "Come see the tiger!4"
  },

]

class MemberList extends React.Component {
  constructor() {
    super();

    this.state = {
      members:[],
      currEventInfo: {
        name: '',
        date: '',
        points: '',
        url: ''
      }
    };

    this.memberIndex = 0;
  }


  render() {
    const members = eventsInfo.map((text) => <MemberFeed name={text.name} date={text.date} image={text.url} points={text.points}/>)

    return (
      <div>
              <Popup flowing='true' keepInViewPort='true' size='huge' position='bottom left'
                trigger={<Button icon='add' floated='left'/>}
                content={<AddEventForm/>}
                basic
                on='click'
              />
              <Segment style={{overflow:'auto', maxHeight:670, minHeight:670}} size='massive'>
              <MemberCard feed ={members}>
              </MemberCard>
              </Segment>
      </div>
    );
  }
}

export default MemberList;
