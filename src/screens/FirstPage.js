import React, {useEffect, useState} from 'react';
import Home from './Home';
import Login from './Login';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {checktoken} from '../apiCalls/ApiCalls';
import {storeToken, storeEmail, storeDetails} from '../store/actions';
import Loader from '../navigations/Loader';

const FirstPage = props => {
  const [token, setToken] = useState(props.token);
  const [visible, setVisible] = useState(true);
  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        checktoken(value)
          .then(json => {
            if (json.isVerified == 'true') {
              let details = {
                name: json.name,
                number: json.number,
                isAdmin: json.isAdmin,
              };
              console.log(json);
              let email = json.email;
              setToken(value);
              props.dispatch(storeToken(value));
              if (email) {
                props.dispatch(storeEmail(email));
              }
              props.dispatch(storeDetails(details));
            }
          })
          .catch(error => {
            console.error(error);
            setVisible(false);
            throw error;
          })
          .finally(() => false);
        setVisible(false);
      }
    } catch (e) {
      // error reading value
    }
  }, []);
  return (
    <Loader visible={visible}>
      {token ? <Home props={props} /> : <Login props={props} />}
    </Loader>
  );
};

const mapStateToProps = (state, props) => {
  return {
    token: state.userReducer.token,
    ...props,
  };
};
export default connect(mapStateToProps)(FirstPage);
