import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {connect} from 'react-redux';
import {login} from '../apiCalls/ApiCalls';
import {storeToken, storeDetails} from '../store/actions';

const Password = ({email, navigation, dispatch}) => {
  const [text, setText] = useState('');

  const [error, setError] = useState(false);
  const onSubmit = () => {
    if (text) {
      login(email, text)
        .then(async json => {
          try {
            if ('true' == json.isLoggedIn) {
              await AsyncStorage.setItem('token', json.token);
              dispatch(storeToken(json.token));
              dispatch(
                storeDetails({
                  name: json.name,
                  number: json.number,
                  isAdmin: json.isAdmin,
                }),
              );
              console.log('token updated =' + json.token);
              navigation.navigate('Home');
            } else {
              setError(true);
            }
          } catch (e) {
            // saving error
          }
        })
        .catch(error => {
          console.error(error);
          throw error;
        })
        .finally(() => false);
    }
  };
  return (
    <ImageBackground
      source={require('../images/crs.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={style.container}>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setText(text)}
        />
        {error && <Text style={style.error}>Invalid password</Text>}
        <TouchableOpacity onPress={() => onSubmit()}>
          <Icon name="arrow-forward" size={30} color="#ffff"></Icon>
        </TouchableOpacity>
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
  textInput: {
    fontFamily: 'Bold',
    fontSize: 12,
    width: 280,
    paddingHorizontal: 12,
    backgroundColor: '#ffff',
    margin: 5,
    borderRadius: 10,
  },
  error: {
    color: 'white',
  },
});

const stateToProps = (state, ownProps) => {
  return {
    email: state.userReducer.email,
    ...ownProps,
  };
};

export default connect(stateToProps)(Password);
