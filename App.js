import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import GeolocationExample from './components/GeoLocationExample'
import Map from './components/Map'
import Gyroscope from './components/Gyroscope'
import Drag from './components/Drag'
// import Sphere from './components/Sphere'
import Swipe from './components/Swipe'
import Accel from './components/Accel'
import LongPress from './components/LongPress'
import MapView, { MAP_TYPES } from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentComponent: "Accel"
    }
  }

  // renderComponenten(){

  // }
  render() {
    return (
      // <Map/>
      // <Drag/>
      // <Swipe/>
      // <LongPress/>
      // <Gyroscope/>
      // <Sphere/>
      // <Accel/>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text>Geo-Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.Button]}>
            {/* onPress={()=>{this.setState(()=>{currentComponent:"Gyroscope"})}}> */}
              <Text>Gyroscope</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Accelerometer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text>drag</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.Button]}>
            <Text>swipe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>long press</Text>
          </TouchableOpacity>
        </View>
       <Text>{this.state.currentComponent}</Text>
      </View>
    )};
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    // marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  }
});
