import React, { Component } from "react";
import cookie from 'react-cookies';
import {Redirect} from 'react-router-dom';
import shield from '../images/shield.png';
import { Button, Container, Dropdown, Grid, Header, Icon, Menu, Image } from "semantic-ui-react";

import "./Nav.css";
import CommunityChooser from "./CommunityChooser.jsx"

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      dropdownMenuStyle: {
        display: "none"
      }
    }
    console.log(cookie.load("profile"));

    this.logout = this.logout.bind(this);
  };

  handleToggleDropdownMenu = e => {
    let profile = cookie.load("profile");
    profile["currentCommunity"] = e.target.value;
    cookie.set("profile", profile);

    this.props.refresh();
  };

  logout = () => {
    cookie.remove('profile');
    //this.props.history.push(`/`);
    console.log(this.props);
    this.setState({})
  }

  render() {

    if ( !cookie.load("profile") ) {
      console.log("FA;SOIDFJA;SIDJF;AOSIDJF;AOISDJF;OIJ")
      return <Redirect to='/'/>
    }

    const communities = cookie.load("profile").communities.map((community) => <Dropdown.Item value={community} onClick={this.handleToggleDropdownMenu}>{community}</Dropdown.Item> )

    return (
      <div className="Nav">
        <Grid padded className="tablet computer only">
          <Menu borderless fluid inverted size="massive">
<<<<<<< HEAD
            
              <Menu.Item header as="a" href="#">
                SafeGuard
=======

              <Menu.Item>
                <Image src={shield} size='mini'/>
>>>>>>> cb74aba645ed5c3c4f2d9d000ef9b2163ecfce32
              </Menu.Item>
              <Menu.Item as="a" href="/homepage">
                SafeGuard
              </Menu.Item>
              <Menu.Item as="a" href="/community">
                Community
              </Menu.Item>
              <Menu.Item as="a" href="/patrols">
                Patrol
              </Menu.Item>
              <Menu.Item as="a" onClick={this.logout} position='right'>
                Logout
              </Menu.Item>

            <Dropdown item text='Choose Community'>
              <Dropdown.Menu>
                {communities}
              </Dropdown.Menu>
            </Dropdown>


          </Menu>
        </Grid>
        <Grid padded className="mobile only">

          <Menu borderless fluid inverted size="huge">
            <Menu.Item header as="a" href="#root">
              Safeguard
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  inverted
                  basic
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item active as="a" href="#root">
                Home
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Community
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Patrol
              </Menu.Item>

              <CommunityChooser>
              </CommunityChooser>
              <Menu.Item as="a" onClick={this.logout}>
                Logout
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
      </div>
    );
  }
}

export default Nav;
