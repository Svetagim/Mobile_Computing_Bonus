import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Draggable from 'react-native-draggable';

class Drag extends Component {
    render() {
      return (
          <View style={{flex:1, justifyContent: 'flex-end' }}>
            <Draggable renderShape='image' imageSource={require('../assets/ziv.png')} renderSize={130} 
              offsetX={0} offsetY={0}
              reverse={false}
            />  
            <Image source={require('../assets/shirt.png')}/>
            </View>  
       );
    }
}
export default Drag;