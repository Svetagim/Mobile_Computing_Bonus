import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Accelerometer } from 'expo'

const styles = StyleSheet.create({
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10
  }
})

export default class Accel extends Component {
  state = {
    accelerometerData: {}
  }

  componentWillUnmount() {
    this._unsubscribe()
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData })
    })
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove()
    this._subscription = null
  }

  render() {
    let { x, y, z } = this.state.accelerometerData

    return (
      <View style={styles.sensor}>
        <Text>Accelerometer:</Text>
        <Text>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
      </View>
    )
  }
}

function round(n) {
  if (!n) {
    return 0
  }

  return Math.floor(n * 100) / 100
}
