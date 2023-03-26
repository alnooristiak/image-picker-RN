import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import pizzaImg from '../../../assets/image/pizza.jpg';

const InputPlace = (props) => {
  return (
    <>
      <View style={styles.inputSection}>
        <TextInput
          placeholder="Enter Text"
          style={styles.textInput}
          value={props.inputValue}
          onChangeText={(text) => props.setInputValue(text)}
        />
      </View>
    </>
  );
};

export default InputPlace;

const styles = StyleSheet.create({
  inputSection: {
    marginTop: 90,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    borderBottomColor: "green",
    borderWidth: 1,
    padding: 7,
    width: "70%",
  },
});
