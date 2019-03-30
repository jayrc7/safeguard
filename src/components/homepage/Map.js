import React from 'react';
import { Container } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "a" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <h1
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
