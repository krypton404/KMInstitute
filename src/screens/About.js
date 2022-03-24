import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const About = () => {
  return (
    <ImageBackground
      source={require('../images/crs.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={style.container}>
        <Text style={style.text}>KM Institute</Text>
        <Text style={style.textsmall}>Email: xxx </Text>
        <Text style={style.textsmall}>Mobile: xxxx</Text>
      </View>
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontSize: 30,
    color: '#ffff',
    margin: 5,
  },
  textsmall: {
    fontSize: 20,
    color: '#ffff',
    margin: 5,
  },
});
export default About;
