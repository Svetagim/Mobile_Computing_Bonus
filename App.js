import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GeolocationExample from './components/GeoLocationExample'
import Map from './components/Map'
import MapView, { MAP_TYPES } from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <Map/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
