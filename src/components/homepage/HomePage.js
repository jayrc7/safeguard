import React from 'react';
import { Grid } from 'semantic-ui-react'

import NewsFeed from './NewsFeed';
import Map from './Map';

const items = [
{
  childKey: 0,
  image: '/images/wireframe/image.png',
  header: 'Wild Lion!',
  description: 'There is a wild lion on the loose! Stay indoors.',
},
{
  childKey: 1,
  image: '/images/wireframe/image.png',
  header: 'Free cookies',
  description: 'cookies',
},
]

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Map/>
            </Grid.Column>
            <Grid.Column width="5">
              <NewsFeed items={items}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
