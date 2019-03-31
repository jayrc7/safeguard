import React from 'react';
import { Container } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'
import SafehouseMarker from './SafehouseMarker'

const safehouses = [
  {
    lat: 34.052235,
    lng: -118.243683
  },
  {
    lat: 34.002235,
    lng: -118.240083
  },
  {
    lat: 34.042005,
    lng: -118.203683
  },
  {
    lat: 34.049235,
    lng: -118.293683
  },
]

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 34.032235,
      lng: -118.243683
    },
    zoom: 13
  };

  render() {
    const safehouseMarkers = safehouses.map((markers) => <SafehouseMarker lat={markers.lat} lng={markers.lng}/>)

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '83vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCK7kmYS38lPKj1XBVp7D-OFVUaExOtHDo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {safehouseMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
