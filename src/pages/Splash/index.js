import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationHelpersContext } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { Video } from 'react-native-video';
import { Grid } from 'react-native-animated-spinkit'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          handleGetToken();
        },2000);

        const handleGetToken = async () => {
            const dataToken = await AsyncStorage.getItem("AccessToken");
            if(!dataToken){
                navigation.replace('Login');
            }
            else{
                navigation.replace('Home');
            }
           
        }
        
    });
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fc4a1a'}}>
            <Grid size={48} color="#f7b733" />
        </View>
    )
}

export default Splash;