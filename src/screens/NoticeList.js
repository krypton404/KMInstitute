import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import Chapters from './Chapters';

import {connect} from 'react-redux';
import {loadNotices} from '../apiCalls/ApiCalls';
import Loader from '../navigations/Loader';

const NoticeList = props => {
  let [notices, setNotices] = useState([]);

  const [visible, setVisible] = useState(true);
  useEffect(async () => {
    await loadNotices(props.token)
      .then(notices => {
        setNotices(notices);
      })
      .catch(error => {
        console.error(error);
        setVisible(false);
        throw error;
      })
      .finally(() => false);
    setVisible(false);
  });
  return (
    <Loader visible={visible}>
      <ImageBackground
        source={require('../images/crs.png')}
        style={{width: '100%', height: '100%'}}>
        <Text
          style={{
            color: '#FFF',
            fontFamily: 'Bold',
            fontSize: 35,
            width: 200,
            alignSelf: 'center',
            textAlign: 'center',
            paddingTop: 30,
          }}>
          Notice
        </Text>

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
          alwaysOpen={510}
          scrollViewProps={{showsVerticalScrollIndicator: false}}>
          <View
            style={{
              marginHorizontal: 30,
              marginTop: 40,
            }}>
            {notices &&
              notices.map((prop, key) => {
                return (
                  <Chapters
                    key={key}
                    num={key + 1}
                    color="#fde6e6"
                    title={prop.title}
                    description={prop.description}
                    onPress={() =>
                      props.navigation.navigate('Notice', {...prop})
                    }
                  />
                );
              })}
          </View>
        </Modalize>
      </ImageBackground>
    </Loader>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.userReducer.token,
    ...ownProps,
  };
};
export default connect(mapStateToProps)(NoticeList);
