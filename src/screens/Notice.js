import React from 'react';
import {View, StyleSheet, StatusBar, Dimensions, Text} from 'react-native';

const {width, height} = Dimensions.get('window');

const Notice = ({navigation}) => {
  let obj = navigation.state.params;
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#f58084" />

      <Text style={style.title}>{obj.title}</Text>

      <Text style={style.description}>{obj.description}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
    height: height,
  },
  title: {fontFamily: 'Bold', padding: 10, fontSize: 35, alignSelf: 'center'},
  description: {
    fontFamily: 'Medium',
    textAlign: 'justify',
    color: '#345c74',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Notice;
