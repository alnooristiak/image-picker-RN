import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useDeferredValue, useState } from "react";
import { trySignup } from "../../redux/actionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return{
    trySignup: (email, password) => dispatch(trySignup(email, password))
  }
}


const Login = (props) => {
  const [authState, setAuthState] = useState({
    mode: "login",
    inputs: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const swtchViews = () => {
    setAuthState({
      ...authState,
      mode: authState.mode === "login" ? "signup" : "login",
      inputs: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    });
  };

  const updatsInputs = (value, name) => {
    setAuthState({
      ...authState,
      inputs: {
        ...authState.inputs,
        [name]: value,
      },
    });
  };

  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleAuth = () => {
    const email = authState.inputs.email;
    const password = authState.inputs.password;
    const confirmPassword = authState.inputs.confirmPassword;
    if (email !== "" && password !== "") {
      if (re.test(email)) {
        if (authState.mode === "login") {
          props.navigation.navigate("home");
        } else {
          if (password === confirmPassword) {
            props.trySignup(email, password);
            props.navigation.navigate("home");
          } else {
            alert("Password dos'n match");
          }
        }
      } else {
        alert("Invilite Email");
      }
    } else {
      alert("Input all the filds");
    }
  };

  let confirmPassFild = null;
  if (authState.mode === "signup") {
    confirmPassFild = (
      <TextInput
        style={styles.inputSections}
        placeholderTextColor={"red"}
        placeholder="Conferm Password"
        value={authState.inputs.confirmPassword}
        onChangeText={value => updatsInputs(value, "confirmPassword")}
      />
    );
  }

  return (
    <View style={{ marginVertical: 40 }}>
      <TouchableOpacity
        style={{ ...styles.btnStyles, backgroundColor: "blue" }}
        onPress={() => swtchViews()}
      >
        <Text style={styles.btnText}>
          {authState.mode === "login" ? "swtch to sign up" : "Swtch to login"}
        </Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSections}
          placeholderTextColor={"red"}
          placeholder="Enter your Email"
          onChangeText={value => updatsInputs(value, "email")}
        />
        <TextInput
          style={styles.inputSections}
          placeholderTextColor={"red"}
          placeholder="Password"
          onChangeText={value => updatsInputs(value, "password")}
        />
        {confirmPassFild}
      </View>

      <TouchableOpacity
        style={{ ...styles.btnStyles, marginTop: 15 }}
        onPress={() => {
          handleAuth();
        }}
      >
        <Text style={styles.btnText}>
          {authState.mode === "login" ? "Login" : "signup"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
  },
  inputSections: {
    borderWidth: 2,
    borderColor: "green",
    padding: 10,
    marginTop: 10,
    width: "70%",
    color: "green",
    borderRadius: 10,
  },
  btnStyles: {
    backgroundColor: "green",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
  },
  signUpBtn: {
    backgroundColor: "green",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
