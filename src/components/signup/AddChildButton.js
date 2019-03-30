import React from 'react'
import { Button } from 'semantic-ui-react'

class AddChildButton extends React.Component {

  onClickHandler() {

  }

  render() {
    return (
      <div>
        <Button onClick={this.onClickHandler}>Add Child</Button>
      </div>
    )
  }
}
