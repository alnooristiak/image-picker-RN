import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

const PickImage = (props) => {
  const handleImagePic = async () => {
    try {
      let reasult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      if (!reasult.canceled) {
        props.setImage(`data:image/jpg;base64,${reasult.base64}`);
      }
    } catch (E) {
      console.log(E);
    }
  };
  let showImage = null;
  if (props.image !== "") {
    showImage = (
      <Image
        style={{ width: "100%", height: 300 }}
        source={{ uri: props.image }}
      />
    );
  }
  return (
    <View>
      {showImage}
      {/* <Button title="pic an image" /> */}
      <TouchableOpacity
        onPress={handleImagePic}
        style={styles.imagePicContainer}
      >
        <Text style={styles.imagePicText}>PIC AN IMAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PickImage;

const styles = StyleSheet.create({
  imagePicContainer: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    width: 200,
    alignSelf: "center",
  },
  imagePicText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
