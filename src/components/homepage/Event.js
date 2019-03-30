import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Event extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Card centered='true'>
        <Image src='/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>{this.props.subject}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.date}</span>
          </Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
      </Card>
      </div>
    )
  }
}

export default Event
