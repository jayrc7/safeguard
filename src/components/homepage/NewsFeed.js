import React from 'react';
import {Item } from 'semantic-ui-react'
import Event from './Event.js'

class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <Event/>
        <Item.Group items={this.props.items}/>
      </div>
    )
  }
}

export default NewsFeed;
