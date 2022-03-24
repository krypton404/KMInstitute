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
import {storeEmail} from '../store/actions';
import {connect} from 'react-redux';
import {register} from '../apiCalls/ApiCalls';

const Login = ({props, dispatch}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const onSubmit = () => {
    if (text) {
      dispatch(storeEmail(text));
      register(text)
        .then(json => {
          if (json.error) {
            setError(true);
            return;
          }
          if ('true' == json.isPresent) {
            props.navigation.navigate('Password');
          } else {
            props.navigation.navigate('OTP');
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
          placeholder="Email"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setText(text)}
        />
        {error && <Text style={style.error}>Invalid Email</Text>}
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
export default connect()(Login);
