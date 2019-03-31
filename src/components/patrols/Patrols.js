import React from 'react'
import Map from '../homepage/Map'
import Nav from '../nav/Nav'
import { Grid, Header, Segment } from 'semantic-ui-react'


class Patrols extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <Grid centered='true' padded='true'>
          <Grid.Row columns={2}>
            <Grid.Column width="5">
              <Segment style={{overflow:'auto', maxHeight:770}} size='massive'>
                <h1>Schedule</h1>
              </Segment>
            </Grid.Column>
            <Grid.Column width="11">
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
