import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {storeDetails} from '../store/actions';

import {updateDetails} from '../apiCalls/ApiCalls';

const FillDetails = ({token, navigation, dispatch}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (password && confirmPassword && password == confirmPassword) {
      let details = {
        name: name,
        number: number,
        password: password,
      };
      updateDetails(token, name, password, number)
        .then(json => {
          if ('true' == json.isUpdated) {
            dispatch(storeDetails(details));
            navigation.navigate('Home');
          } else {
            setError(true);
          }
        })
        .catch(error => {
          console.error(error);
          throw error;
        })
        .finally(() => false);
    } else {
      setError(true);
    }
  };

  return (
    <ImageBackground
      source={require('../images/crs.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={style.container}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Mobile"
          keyboardType={'number-pad'}
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setNumber(text)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setConfirmPassword(text)}
        />
        {error && <Text style={style.error}>password did not match</Text>}
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
    token: state.userReducer.token,
    ...ownProps,
  };
};

export default connect(stateToProps)(FillDetails);
