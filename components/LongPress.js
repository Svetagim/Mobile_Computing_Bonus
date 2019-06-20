import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

export default class LongPress extends Component {
  _onPressButton() {
    Alert.alert('Too short press!!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!!')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touch Me!</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
