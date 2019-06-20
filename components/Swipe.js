import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '10%'
  }
})

class Swipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: 'none',
      backgroundColor: '#fff'
    }
  }

  onSwipeUp() {
    this.setState({ myText: 'You swiped up!' })
  }

  onSwipeDown() {
    this.setState({ myText: 'You swiped down!' })
  }

  onSwipeLeft() {
    this.setState({ myText: 'You swiped left!' })
  }

  onSwipeRight() {
    this.setState({ myText: 'You swiped right!' })
  }

  onSwipe(gestureName) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    this.setState({ gestureName })
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: 'red' })
        break
      case SWIPE_DOWN:
        this.setState({ backgroundColor: 'green' })
        break
      case SWIPE_LEFT:
        this.setState({ backgroundColor: 'blue' })
        break
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: 'yellow' })
        break
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={state => this.onSwipeUp(state)}
        onSwipeDown={state => this.onSwipeDown(state)}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
      >
        <View style={styles.container}>
          <Text>{this.state.myText}</Text>
          <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
        </View>
      </GestureRecognizer>
    )
  }
}

export default Swipe
