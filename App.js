import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GeolocationExample from './components/GeoLocationExample'
import Map from './components/Map'
import Gyroscope from './components/Gyroscope'
import Gestures from './components/Gestures'
import MapView, { MAP_TYPES } from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      // <Map/>
      // <Gestures/>
      <Gyroscope/>
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
