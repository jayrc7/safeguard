import React from 'react'
import { Card, Feed, Image } from 'semantic-ui-react'
import MemberFeed from './MemberFeed'


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

class MemberCard extends React.Component {
  constructor() {
    super();


  }
  render() {
    const members = eventsInfo.map((text) => <MemberFeed name={text.name} date={text.date} image={text.url} points={text.points}/>)
        return (
        <Card>
        <Card.Content>
          <Card.Header>Community Members</Card.Header>
        </Card.Content>
        <Card.Content>
        <Feed size='large' fluid>
            {members}
         </Feed>
        </Card.Content>
      </Card>
    );
}
}
export default MemberCard
