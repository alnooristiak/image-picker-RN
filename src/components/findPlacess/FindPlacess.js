import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { connect } from "react-redux";
import PlaceDetail from "../placeDetail/PlaceDetail";
import PlaceList from "../placeList/PlaceList";
import { deletePlace } from "../../redux/actionCreators";

import ListItem from "../listItem/ListItem";

const mapStateToProps = state => {
    return {
        placelist: state.placelist
    }
}

const mapDispactToProps = dispatce => {
    return {
        deletePlace: key => dispatce(deletePlace(key))
    }
}

const FindPlacess = props => {
  // const [inputValue, setInputValue] = useState("");
//   const [placelist, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = key => {
    const place = props.placelist.find(place => {
      return place.key === key
    })
    setSelectedPlace(place);
  };

  const handleHideModel = () => {
    setSelectedPlace(null);
  }

  const handleDeleteItem = key => {
    // setPlaceList(
    //     props.placelist.filter(place => place.key != key)
    // );
    props.deletePlace(key);
    setSelectedPlace(null);
  }

  let placeDetail = null;
  if(selectedPlace !== null){
    placeDetail= <PlaceDetail 
    place={selectedPlace}
    handleHideModel={handleHideModel}
    handleDeleteItem={handleDeleteItem}
    />
  }



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {placeDetail}
      {/* <PlaceDetail /> */}
      
      <PlaceList
        placelist={props.placelist}
        handleSelectedPlace={handleSelectedPlace}
      />
    </View>
  );
} //end

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    marginTop: 45,
    padding: 10,
  },
});

export default connect(mapStateToProps, mapDispactToProps)(FindPlacess);