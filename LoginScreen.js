import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as Google from 'expo-google-app-auth';
import { useState, useContext } from 'react';

// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../../components/CredentialsContext';

export default function LoginScreen(props) {
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [googleLogIn, setGoogleLogIn] = useState(false);
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

  const handleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `209499385713-fahv3qoj9kqiogush1b4gmfi6u356pco.apps.googleusercontent.com`,
      androidClientId: `209499385713-s63hka2abrh0g9lm0olpbdm1dlt0leb7.apps.googleusercontent.com`,
      scopes: ['profile', 'email'],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == 'success') {
          const { email, name, photoUrl } = user;
          console.log({result})
          setGoogleLogIn(true);
          persistLogin({ email, name, photoUrl }, 'Google signin successful', 'SUCCESS');
        } else {
          console.log('Google Signin was cancelled');
        }
        setGoogleSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setGoogleLogIn(false);
        setGoogleSubmitting(false);
      });
  };

  // Persisting login
  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem('Credentials', JSON.stringify(credentials))
      .then(() => {
        setStoredCredentials(credentials);
        console.log('set credential');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      {googleLogIn && (
        <Text>Google登入成功</Text>
      )}
      {!googleLogIn && !googleSubmitting && (
        <TouchableOpacity style = {styles.touchableOpacity} onPress={handleGoogleSignin}>
            <Text style={{fontSize:20 , textAlign:'right' , color:'white'}} > 以GOOGLE帳號繼續 </Text>
        </TouchableOpacity>
      )}
      {!googleLogIn && googleSubmitting && (
        <Text>以Google登入中</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity :{
    width: 300,
    height : 40,
    backgroundColor :'#0080FF',
    borderWidth:2,
    // borderColor:'blue',
    borderRadius: 50,
    marginTop :20
  },
});
