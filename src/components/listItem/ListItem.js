import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

const ListItem = (props) => {
  return (
    <TouchableWithoutFeedback
      style={styles.containerMain}
      onPress={props.onItemPressed}
    >
      <View style={styles.container}>
        <Image style={styles.imgStyle} source={{ uri: props.image }} />
        <Text style={styles.itemNames}>{props.itemName}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  // containerMain: {
  //   flexDirection: 'column'
  // },
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#95a5a6",
    marginTop: 10,
    flexDirection: "row",
    borderRadius: 8,
  },
  //   itemNames: {
  //     color: "white",
  //   },
  imgStyle: {
    justifyContent: "center",
    alignSelf: "center",
    width: 65,
    height: 55,
    borderRadius: 8,
  },
  itemNames: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
    color: "white",
  },
});
