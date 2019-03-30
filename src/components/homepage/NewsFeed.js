import React from 'react';
import {Item } from 'semantic-ui-react'

class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <Item.Group items={this.props.items}/>
      </div>
    )
  }
}

export default NewsFeed;
