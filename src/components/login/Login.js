import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Login = (props) => {
  const [authState, setAuthState] = useState({
    mode: 'Login',
    inputs: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const swtchViews = () => {
    setAuthState({
      ...authState,
      mode: 'signUp'
    })
  }

  return (
    <View style={{marginVertical: 40}}>
      <TouchableOpacity
      style={{...styles.btnStyles, backgroundColor: 'blue'}}
        onPress={() => swtchViews()
        }
      >
        <Text>{authState.mode === "login" ? "swtch to sign up" : "Swtch to login"}</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.inputSections} 
        placeholderTextColor={'red'}
        placeholder="Enter your Email" 
        />
        <TextInput 
        style={styles.inputSections} 
        placeholderTextColor={'red'}
        placeholder="Password" 
        />
        <TextInput 
        style={styles.inputSections}
        placeholderTextColor={'red'} 
        placeholder="Conferm Password" 
        />
      </View>

      <TouchableOpacity
      style={{...styles.btnStyles, marginTop: 15}}
        onPress={() => {
          props.navigation.navigate("home");
        }}
      >
        <Text>home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center'
  },
  inputSections: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 10,
    marginTop: 10,
    width: '70%',
    color: 'green',
    borderRadius: 10
  },
  btnStyles: {
    backgroundColor: 'green',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10
  },
  signUpBtn : {
    backgroundColor: 'green'
  }
});
