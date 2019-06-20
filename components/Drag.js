import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Draggable from 'react-native-draggable'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})

class Drag extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Draggable
          renderShape="image"
          imageSource={require('../assets/ziv.png')}
          renderSize={130}
          offsetX={0}
          offsetY={0}
          reverse={false}
        />
        <Image source={require('../assets/shirt.png')} />
      </View>
    )
  }
}
export default Drag
