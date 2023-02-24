import { Text, View, Image,StatusBar, TextInput,TouchableOpacity,Alert,SafeAreaView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from "./src/Router";


export default function App() {
  return (
    <NavigationContainer>
    <Router/>
    </NavigationContainer>
  );
}
