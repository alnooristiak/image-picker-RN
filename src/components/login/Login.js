import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = (props) => {
  return (
    <View>
        <TouchableOpacity 
        onPress={() => {props.navigation.navigate('home')}}
        >
         <Text>home</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})