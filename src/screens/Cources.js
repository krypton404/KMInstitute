import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import CourseList from '../screens/CourseList';

const Cources = props => {
  return (
    <ImageBackground
      source={require('../images/cat.png')}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.back}>
          <Image source={require('../images/a1.png')} style={styles.backImg} />
        </TouchableOpacity>
        <View style={styles.homeContainer}>
          <Image source={require('../images/hum.png')} style={styles.backImg} />
        </View>
      </View>
      <Text style={styles.uxCourses}>UI/UX Cources</Text>

      <Modalize
        handleStyle={{
          marginTop: 30,
          backgroundColor: '#e9e9e9',
          width: 80,
        }}
        modalStyle={{
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
        alwaysOpen={500}
        scrollViewProps={{showsVerticalScrollIndicator: false}}>
        <View style={{marginTop: 40}}>
          <CourseList
            onPress={() => props.navigation.navigate('NoticeList')}
            img={require('../images/xd.png')}
            title="Adobe XD Prototyping"
            bg="#fdddf3"
          />
          <CourseList
            img={require('../images/sketch.png')}
            title="Sketch shortcuts and tricks"
            bg="#fef8e3"
          />
          <CourseList
            img={require('../images/ae.png')}
            title="UI Motion Design in After Effects"
            bg="#fcf2ff"
          />
          <CourseList
            img={require('../images/f.png')}
            title="Figma Essentials"
            bg="#fff0ee"
          />
          <CourseList
            img={require('../images/ps.png')}
            title="Adobe Photoshop. Retouching"
            bg="#fdddf3"
          />
          <CourseList
            img={require('../images/sketch.png')}
            title="Sketch shortcuts and tricks"
            bg="#fef8e3"
          />
          <CourseList
            img={require('../images/ae.png')}
            title="UI Motion Design in After Effects"
            bg="#fcf2ff"
          />
        </View>
      </Modalize>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  homeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#8bbcdb',
    marginLeft: 240,
  },
  back: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#8bbcdb',
  },
  backImg: {width: 20, height: 15},
  uxCourses: {
    color: '#FFF',
    fontSize: 35,
    fontFamily: 'Bold',
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 34,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
export default Cources;
