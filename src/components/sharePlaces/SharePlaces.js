import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputPlace from "../inputPlace/InputPlace";
import { addPlace } from "../../redux/actionCreators";
import { connect } from "react-redux";
import PickImage from "../pickImage/PickImage";

const mapDispactToProps = (dispatce) => {
  return {
    addPlace: (place) => dispatce(addPlace(place)),
  };
};

const SharePlaces = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("");
  const handleAddingPlace = () => {
    if (inputValue === "" || image === "") {
      if (image === "") {
        alert("Pick an Image");
      }
    } else {
      props.addPlace({
        key: Math.random().toString(),
        value: inputValue,
        image: image,
      });
      setInputValue("");
      setImage("");
      props.navigation.navigate("FindPlacess");
    }
  };
  return (
    <View>
      <PickImage image={image} setImage={setImage} />
      <InputPlace inputValue={inputValue} setInputValue={setInputValue} />
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          borderRadius: 10,
          padding: 10,
          alignItems: "center",
          marginTop: 10,
          width: 200,
          alignSelf: "center",
        }}
        onPress={() => {
          handleAddingPlace();
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          ADD PLACE NAME
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, mapDispactToProps)(SharePlaces);

const styles = StyleSheet.create({});
