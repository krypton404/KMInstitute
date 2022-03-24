import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import Icon from 'react-native-vector-icons/Ionicons';

const CourseList = ({name, title, bg, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: bg,
        padding: 20,
        paddingLeft: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Icon name={name} color={'#DB4C77'} size={40} />

      <View style={style.container}>
        <View>
          <Text
            style={{
              color: '#345c74',
              fontFamily: 'Bold',
              fontSize: 15,
              paddingHorizontal: 20,
              width: 170,
            }}>
            {title}
          </Text>
        </View>
        <View style={style.circle}>
          <Icon
            name={'caret-forward-circle-outline'}
            color={'#DB4C77'}
            size={40}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  circle: {
    // padding: 10,
  },
});
export default CourseList;
