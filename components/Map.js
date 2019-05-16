import React, { Component } from 'react';
import MapView from 'react-native-maps';

export default class Map extends Component {
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 37.785834,
          longitude: -122.406417,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />
    );
  }
}