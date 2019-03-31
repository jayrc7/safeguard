import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

class AddEventPopup extends React.Component {
  render() {
    return(
  
  <Popup
    trigger={<Button icon='add' />}
    content="The default theme's basic popup removes the pointing arrow."
    basic
  />
  )
}
}