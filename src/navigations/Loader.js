import React from 'react';
import {View, Image, ImageBackground} from 'react-native';

const Loader = props => {
  return props.visible ? (
    <ImageBackground
      source={require('../images/crs.png')}
      style={{width: '100%', height: '100%'}}></ImageBackground>
  ) : (
    <View>{props.children}</View>
  );
};

export default Loader;
