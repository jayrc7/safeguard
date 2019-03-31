import React from 'react';
import { Grid, Image} from 'semantic-ui-react'
import Nav from './../nav/Nav.jsx'
import MemberList from './MemberList'
import ChatImg from './chat.jpg'
import CommunityEvents from './CommunityEvents'
class Community extends React.Component{
    render() {
        
    
        return (
          <div>
            <Nav/>
            <Grid centered='true' padded='true'>
              <Grid.Row columns={3}>
                <Grid.Column width="4">
                <label> Community Members</label>
                <MemberList/>
              
                </Grid.Column>
                <Grid.Column width="7">
                <img src={ChatImg}/>
              
                </Grid.Column>
                <Grid.Column width="4">
                <CommunityEvents/>
              
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        );
      }
    }
    
export default Community