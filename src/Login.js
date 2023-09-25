import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import { firebase } from '../config';

const backgroundImage = require('./TDMU.jpg'); 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
    firebase
      .firestore()
      .collection('Users')
      .add({
        username: username,
        password: password,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('./testhinhanh.png')} style={styles.logo} /> 
        <Text style={styles.appName}>TDMU</Text> 
        <TextInput
          value={username}
          onChangeText={txt => setUsername(txt)}
          placeholder="Nhập Tên người dùng"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={txt => setPassword(txt)}
          placeholder="Nhập Mật khẩu"
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            saveData();
          }}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    borderRadius: 10,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '84%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 15,
    marginBottom: 10,
  },
  button: {
    width: '84%',
    height: 47,
    borderRadius: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Login;