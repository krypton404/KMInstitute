import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import CourseList from '../screens/CourseList';
import {connect} from 'react-redux';

const Home = ({props}) => {
  const noticeOnPress = () => {
    props.navigation.navigate('NoticeList');
  };
  const bookOnPress = () => {
    props.navigation.navigate('PDFList');
  };
  return (
    <ImageBackground
      source={require('../images/crs.png')}
      style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            paddingHorizontal: 20,
          }}>
          {/* <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: '#d1a0a7',
            }}>
            <Image
              source={require('../images/hum.png')}
              style={{height: 15, width: 20}}
            />
          </View> */}
        </View>
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 35,
            paddingTop: 40,
            fontFamily: 'Bold',
            color: '#FFF',
          }}>
          KM Institute
        </Text>

        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFF',
            padding: 10,
            borderRadius: 12,
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <TextInput
            placeholder="Search for new knowledge!"
            placeholderTextColor="#345c74"
            style={{
              fontFamily: 'Bold',
              fontSize: 12,
              width: 280,
              paddingHorizontal: 12,
            }}
          />
          <Image
            source={require('../images/sear.png')}
            style={{height: 14, width: 14}}
          />
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFF2F2',
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#345c74',
                fontSize: 20,
                fontFamily: 'Bold',
                width: 250,
                paddingRight: 100,
              }}>
              Start learning with us
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: '#f58084',
                alignItems: 'center',
                marginTop: 20,
                width: 150,
                paddingVertical: 10,
                borderRadius: 14,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Bold',
                  fontSize: 12,
                }}>
                New Contents
              </Text>
              <Image
                source={require('../images/a3.png')}
                style={{marginLeft: 20, width: 8, height: 8}}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../images/undraw.png')}
            style={{marginLeft: -80, marginTop: 35}}
          />
        </View>
        <Text
          style={{
            color: '#ffff',
            fontFamily: 'Bold',
            fontSize: 25,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
          }}>
          Sections
        </Text>

        <CourseList
          name={'book'}
          onPress={bookOnPress}
          title="Study Materials"
          bg="#fdddf3"
        />

        <CourseList
          name={'notifications'}
          onPress={noticeOnPress}
          title="Notice"
          bg="#fcf2ff"
        />
        <CourseList
          name={'ribbon'}
          title="Contact"
          onPress={() => {
            if (props.isAdmin) {
              props.navigation.navigate('Admin', {
                token: props.token,
                ...props,
              });
            } else {
              props.navigation.navigate('About');
            }
          }}
          bg="#fef8e3"
        />
      </ScrollView>
    </ImageBackground>
  );
};

let mapStateToProps = (state, props) => {
  return {isAdmin: state.userReducer.isAdmin, ...props};
};
export default connect(mapStateToProps)(Home);
