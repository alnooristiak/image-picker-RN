import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItem from "../listItem/ListItem";

const PlaceList = (props) => {
  return (
    <>
      <FlatList
        // style={{ width: "100%" }}
        data={props.placelist}
        renderItem={(info) => {
          return (
            <ListItem
              itemName={info.item.value}
              onItemPressed={() => props.handleSelectedPlace(info.item.key)}
              image={info.item.image}
            />
          );
        }}
      />
    </>
  );
};

export default PlaceList;

const styles = StyleSheet.create({});
