import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GeolocationExample from './components/GeoLocationExample'
import Map from './components/Map'
import Gyroscope from './components/Gyroscope'
import Drag from './components/Drag'
// import Sphere from './components/Sphere'
import Swipe from './components/Swipe'
import Accel from './components/Accel'
import LongPress from './components/LongPress'
import MapView, { MAP_TYPES } from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      // <Map/>
      // <Drag/>
      // <Swipe/>
      // <LongPress/>
      // <Gyroscope/>
      // <Sphere/>
      <Accel/>
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
