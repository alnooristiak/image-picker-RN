import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/login/Login";
import NavigationTab from "./src/components/navigationTab/NavigationTab";
import { navigate, navigationRef } from "./src/NavigationRoot";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen
              name="Places"
              component={NavigationTab}
              options={{
                headerLeft: null,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigate("Login");
                    }}
                  >
                    <FontAwesome
                      name="power-off"
                      style={{ paddingRight: 20 }}
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
