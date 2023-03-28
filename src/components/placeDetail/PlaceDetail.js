import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const PlaceDetail = (props) => {
  return (
    <>
      <Modal>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={{ uri: props.place.image }}
          />
          <Text style={styles.textStyle}>{props.place.value}</Text>
          <View>
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => {
                props.handleDeleteItem(props.place.key);
              }}
            >
              <MaterialIcons
                style={styles.iconStyle}
                name="delete"
                size={24}
                color="white"
              />
              <Text style={styles.btnText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnStyle, styles.btnBlue]}
              onPress={() => {
                props.handleDeleteItem();
              }}
            >
              <AntDesign
                style={styles.iconStyle}
                name="closecircle"
                size={24}
                color="white"
              />
              <Text style={styles.btnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PlaceDetail;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#95a5a6",
  },
  imageStyle: {
    alignSelf: "center",
    width: "100%",
    height: 300,
    borderRadius: 15,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    alignSelf: "center",
    color: "white",
  },
  btnStyle: {
    marginTop: 10,
  },
  btnStyle: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  iconStyle: {
    marginRight: 7,
  },
  btnBlue: {
    backgroundColor: "#54a0ff",
  },
});
