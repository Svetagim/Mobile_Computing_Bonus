import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import Draggable from 'react-native-draggable';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class Gestures extends Component {

    constructor(props) {
        super(props);
        
        // this.state = {
        //   myText: 'I\'m ready to get swiped!',
        //   gestureName: 'none',
        //   backgroundColor: '#fff'
        // };
      }
      state = {
        animatedTouchScale: new Animated.Value(1),
      }
      animationStep = (toValue, callback, duration) => {
        const { animatedTouchScale } = this.state;
        Animated.timing(animatedTouchScale, {
          toValue,
          duration: duration || 100,
          useNativeDriver: true,
        }).start(callback);
      }
    
      // Scale the button down when the user "hovers" on it
      handlePressIn = () => this.animationStep(0.95);
    
      // Always scale out again, regardless if the touch is cancelled
      handlePressOut = () => this.animationStep(1);
    
      // If the user taps without holding, then animate in, trigger onPress, and animate out
      handlePress = () => {
        // onPress is an external function. Ex:
         () => Alert.alert("Don't stop... (づ｡◕‿‿◕｡)づ")
        const { onPress } = this.props;
        this.animationStep(0.95, () => {
          onPress();
          this.animationStep(1, () => {}, 50);
        }, 50);
      }
    
      onSwipeUp(gestureState) {
        this.setState({myText: 'You swiped up!'});
      }
     
      onSwipeDown(gestureState) {
        this.setState({myText: 'You swiped down!'});
      }
     
      onSwipeLeft(gestureState) {
        this.setState({myText: 'You swiped left!'});
      }
     
      onSwipeRight(gestureState) {
        this.setState({myText: 'You swiped right!'});
      }
     
      onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
          case SWIPE_UP:
            this.setState({backgroundColor: 'red'});
            break;
          case SWIPE_DOWN:
            this.setState({backgroundColor: 'green'});
            break;
          case SWIPE_LEFT:
            this.setState({backgroundColor: 'blue'});
            break;
          case SWIPE_RIGHT:
            this.setState({backgroundColor: 'yellow'});
            break;
        }
      }
     
      // render() {
        
      //   const config = {
      //     velocityThreshold: 0.3,
      //     directionalOffsetThreshold: 80
      //   };
     
      //   return (
      //     <GestureRecognizer
      //       onSwipe={(direction, state) => this.onSwipe(direction, state)}
      //       onSwipeUp={(state) => this.onSwipeUp(state)}
      //       onSwipeDown={(state) => this.onSwipeDown(state)}
      //       onSwipeLeft={(state) => this.onSwipeLeft(state)}
      //       onSwipeRight={(state) => this.onSwipeRight(state)}
      //       config={config}
      //       style={{
      //         flex: 1,
      //         backgroundColor: this.state.backgroundColor,
      //         marginTop: 60,
      //       }}
      //       >
      //       <Text>{this.state.myText}</Text>
      //       <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      //     </GestureRecognizer>
      //   );
      // }
    
    render() {
      return (
    //     <TouchableWithoutFeedback
    //     // Called first, when you first touch
    //    onPressIn={this.handlePressIn}
    //     // Called second, regardless if the touch is cancelled
    //    onPressOut={this.handlePressOut}
    //     // Called last, only when touch is released, but not if it's cancelled
    //    onPress={this.handlePress}
    //  >
          <View style={{flex:1, justifyContent: 'flex-end' }}>
            <Draggable renderShape='image' imageSource={require('../assets/ziv.png')} renderSize={130} 
              offsetX={0} offsetY={0}
              reverse={false}
            />  
            <Image source={require('../assets/shirt.png')}/>
            </View>
      // </TouchableWithoutFeedback>     
       );
    }
}
  
  export default Gestures;