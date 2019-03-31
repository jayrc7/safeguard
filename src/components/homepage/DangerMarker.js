import React from 'react';
import { Icon } from 'semantic-ui-react'

class DangerMarker extends React.Component {
  render() {
    return (
      <div>
        <Icon name='ban' size='big' color='red'/>
      </div>
    )
  }
}

export default DangerMarker
