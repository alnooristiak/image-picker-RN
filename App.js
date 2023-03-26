import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/login/Login";
import NavigationTab from "./src/components/navigationTab/NavigationTab";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={NavigationTab} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
