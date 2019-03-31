import React from 'react'
import {  Feed, Image } from 'semantic-ui-react'

class MemberFeed extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

    <Feed.Event>
          <Feed.Label image={this.props.url}/>
          <Feed.Content>
            <Feed.User>{this.props.name}</Feed.User>
            <Feed.Date>{this.props.date} </Feed.Date>
            <Feed.Extra > {this.props.points} Community Points </Feed.Extra>
          </Feed.Content>
    </Feed.Event>


    );
}
}
export default MemberFeed
