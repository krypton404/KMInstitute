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
import {connect} from 'react-redux';
import {verifyOTP} from '../apiCalls/ApiCalls';
import {storeToken} from '../store/actions';

const OTP = ({email, navigation, dispatch}) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const onSubmit = () => {
    if (otp) {
      verifyOTP(email, otp)
        .then(json => {
          if ('true' == json.isVerified) {
            dispatch(storeToken(json.token));
            navigation.navigate('FillDetails');
          } else {
            setError(true);
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
          placeholder="OTP"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          keyboardType={'number-pad'}
          onChangeText={text => setOtp(text)}
        />
        {error && <Text style={style.error}>OTP did not match</Text>}
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

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.userReducer.email,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(OTP);
