import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default class Chapters extends React.Component {
  render() {
    const {title, num = 1, description = ' ', color, onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          padding: 20,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: color,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 6,
          }}>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Bold',
              overflow: 'hidden',
            }}>
            {num}
          </Text>
        </View>
        <View style={{width: '80%'}}>
          <Text
            numberOfLines={1}
            style={{
              color: '#345c74',
              fontFamily: 'Bold',
              fontSize: 13,
              paddingLeft: 20,
              width: 180,
            }}>
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#f58084',
              fontSize: 12,
              fontFamily: 'Medium',
              paddingLeft: 20,
            }}>
            {description}
          </Text>
        </View>

        <ProgressCircle
          percent={0}
          radius={17}
          borderWidth={1.5}
          color="#f58084"
          shadowColor="#FFF"
          bgColor="#fff2f2">
          <Image source={require('../images/pl.png')} />
        </ProgressCircle>
      </TouchableOpacity>
    );
  }
}
