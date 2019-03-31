import React from 'react'
import Map from '../homepage/Map'
import Nav from '../nav/Nav'
import Schedule from './Schedule'
import { Grid, Header, Segment, Tab } from 'semantic-ui-react'

const panes = [
  {menuItem: 'Monday', render: ()=><Tab.Pane>Monday</Tab.Pane>},
]

class Patrols extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <Grid centered='true' padded='true'>
          <Grid.Row columns={2}>
            <Grid.Column width="8">
              <Header as='h3' dividing size='huge'>Patrol Schedule</Header>
              <Schedule/>
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
