import React, { Component } from 'react';
import { Gyroscope } from 'expo';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class GyroscopeSensor extends Component {
  state = {
    gyroscopeData: {},
  };

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  };



  _subscribe = () => {
    this._subscription = Gyroscope.addListener(result => {
      this.setState({ gyroscopeData: result });
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    let { x, y, z } = this.state.gyroscopeData;

    return (
      <View style={styles.sensor}>
        <Text>Gyroscope:</Text>
        <Text>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});