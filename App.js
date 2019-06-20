import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Map from './components/Map'
import Gyroscope from './components/Gyroscope'
import Drag from './components/Drag'
import Swipe from './components/Swipe'
import Accel from './components/Accel'
import LongPress from './components/LongPress'

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
    alignItems: 'stretch'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10
  },
  txt: {
    marginTop: 60
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentComponent: ''
    }
  }

  render() {
    const setComponent = this.state.currentComponent
    let comp

    switch (setComponent) {
      case 'Map':
        comp = <Map />
        break
      case 'Drag':
        comp = <Drag />
        break
      case 'Swipe':
        comp = <Swipe />
        break
      case 'LongPress':
        comp = <LongPress />
        break
      case 'Gyroscope':
        comp = <Gyroscope />
        break
      case 'Accel':
        comp = <Accel />
        break
      default:
        comp = <Text style={styles.txt}>Please Click On a Button</Text>
    }

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentComponent: 'Drag' })}
          >
            <Text>Drag</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentComponent: 'Swipe' })}
          >
            <Text>Swipe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentComponent: 'LongPress' })}
          >
            <Text>Long Press</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentComponent: 'Map' })}
          >
            <Text>Geo-Locaition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentComponent: 'Gyroscope' })}
          >
            <Text>Gyroscope</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ currentComponent: 'Accel' })}
          >
            <Text>Accelerometer</Text>
          </TouchableOpacity>
        </View>
        {comp}
      </View>
    )
  }
}
