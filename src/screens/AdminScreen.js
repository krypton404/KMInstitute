import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {postPDFLink, postNotice} from '../apiCalls/ApiCalls';

const AdminScreen = ({navigation}) => {
  let obj = navigation.state.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const onNotice = () => {
    navigation.navigate('Home');
    postNotice(obj.token, title, description);
  };
  const onPDF = () => {
    navigation.navigate('Home');
    postPDFLink(obj.token, name, url);
  };
  return (
    <ImageBackground
      source={require('../images/crs.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={style.container}>
        <TextInput
          placeholder="Title"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          placeholder="Description"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity onPress={() => onNotice()}>
          <View style={style.button}>
            <Text style={style.submit}> post notice</Text>
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Url"
          placeholderTextColor="#A52A2A"
          style={style.textInput}
          onChangeText={text => setUrl(text)}
        />
        <TouchableOpacity onPress={() => onPDF()}>
          <View style={style.button}>
            <Text style={style.submit}>Set pdf link</Text>
          </View>
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
  text: {
    fontSize: 30,
    color: '#ffff',
    margin: 5,
  },
  submit: {
    fontSize: 20,
    color: '#ffff',
    margin: 5,
  },
  button: {backgroundColor: 'green'},
  textInput: {
    fontFamily: 'Bold',
    fontSize: 12,
    width: 280,
    paddingHorizontal: 12,
    backgroundColor: '#ffff',
    margin: 5,
    borderRadius: 10,
  },
});
export default AdminScreen;
