import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SharePlaces from "../sharePlaces/SharePlaces";
import FindPlacess from "../findPlacess/FindPlacess";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const NavigationTab = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="SharePlaces"
          component={SharePlaces}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="share" size={24} color="black" />
            ),
          }}
        />

        <Tab.Screen
          name="FindPlacess"
          component={FindPlacess}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="find-in-page" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default NavigationTab;

const styles = StyleSheet.create({});
