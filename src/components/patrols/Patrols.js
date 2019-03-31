import React from 'react'
import Map from '../homepage/Map'
import Nav from '../nav/Nav'
import Schedule from './Schedule'
import AddPatrolForm from './AddPatrolForm'
import { Grid, Header, Segment, Tab, Popup, Button } from 'semantic-ui-react'

const panes = [
  {menuItem: 'Monday', render: ()=><Tab.Pane>Monday</Tab.Pane>},
]

class Patrols extends React.Component {
  refresh = () => {
    this.setState({})
  }

  render() {
    return (
      <div>
        <Nav refresh={this.refresh}/>
        <Grid centered='true' padded='true'>
          <Grid.Row columns={2}>
            <Grid.Column width="8">
              <Header as='h3' dividing size='huge'>Patrol Schedule</Header>
              <Schedule/>
              <Popup flowing='true' keepInViewPort='true' size='huge' position='bottom left'
                trigger={<Button icon='add' floated='left'/>}
                content={<AddPatrolForm/>}
                basic
                on='click'
              />
            </Grid.Column>
            <Grid.Column width="8">
              <Header as='h3' dividing size='huge'>Patrol Map</Header>
              <Map/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Patrols
