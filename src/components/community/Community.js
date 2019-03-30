import React from 'react';
import { Grid, Image} from 'semantic-ui-react'
import Nav from './../nav/Nav.jsx'
import MemberList from './MemberList'
import CommunityEvents from './CommunityEvents'
class Community extends React.Component{
    render() {
        
    
        return (
          <div>
            <Nav/>
            <Grid centered='true' padded='true'>
              <Grid.Row columns={2}>
                <Grid.Column width="11">
                <MemberList/>
                <CommunityEvents/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        );
      }
    }
    
export default Community