import React from 'react';
import { Container } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'
import SafehouseMarker from './SafehouseMarker'
import DangerMarker from './DangerMarker'

const safehouses = [
  {
    lat: 34.051235,
    lng: -118.242283
  },
  {
    lat: 34.051335,
    lng: -118.244883
  },
  {
    lat: 34.053895,
    lng: -118.244493
  },
  {
    lat: 34.052165,
    lng: -118.242922
  },
]

const dangers = [
  {
    lat: 34.050135,
    lng: -118.247283
  },
  {
    lat: 34.052535,
    lng: -118.243883
  },
  {
    lat: 34.054895,
    lng: -118.242993
  },
]

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 34.052295,
      lng: -118.244493
    },
    zoom: 17
  };

  render() {
    const safehouseMarkers = safehouses.map((markers) => <SafehouseMarker lat={markers.lat} lng={markers.lng}/>)
    const dangerMarkers = dangers.map((markers) => <DangerMarker lat={markers.lat} lng={markers.lng}/>)

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '83vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCK7kmYS38lPKj1XBVp7D-OFVUaExOtHDo"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {safehouseMarkers}
          {dangerMarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
