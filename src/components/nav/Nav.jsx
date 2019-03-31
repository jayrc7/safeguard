import React, { Component } from "react";
import cookie from 'react-cookies';

import { Button, Container, Dropdown, Grid, Header, Icon, Menu } from "semantic-ui-react";

import "./Nav.css";
import CommunityChooser from "./CommunityChooser.jsx"

class Nav extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  logout = () => {
    cookie.remove('profile');
    this.props.history.push(`/`)
  }

  render() {
    return (
      <div className="Nav">
        <Grid padded className="tablet computer only">
          <Menu borderless fluid inverted size="massive">
            
              <Menu.Item header as="a" href="/homepage">
                SafeGuard
              </Menu.Item>
              <Menu.Item active as="a" href="/homepage">
                Home
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
                <Dropdown.Item>School</Dropdown.Item>
                <Dropdown.Item>Home</Dropdown.Item>
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
