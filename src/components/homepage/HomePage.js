import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Nav from './../nav/Nav.jsx'
import NewsFeed from './NewsFeed'
import worldMap from './images/the-united-states-of-america-map.png'
//import Map from './Map';

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
        <Nav/>
        <Grid divided='vertically' padded='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column width="10">
              <Image src={worldMap}/>
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
