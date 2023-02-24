import React from 'react';
import { Text, View, Image,StatusBar, TextInput,TouchableOpacity,Alert,SafeAreaView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import qs from 'qs';
import axios from "axios";
import SweetAlert from 'react-native-sweet-alert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { user_login } from '../../api/user_api';
import LinearGradient from 'react-native-linear-gradient';


const LoginPage = ({navigation}) => {
  const Submit = () => {
    axios({
      method: 'post',
      url: 'https://farhancollection.id/rest_api/',
      data: qs.stringify({
          email: email.toLocaleLowerCase(),
          password: password,
          action: 'login',
        })
    })
    .then(result => {
      console.log(result);
      if (result.status == 200) {
        AsyncStorage.setItem("AccessToken", result.data.token);
        AsyncStorage.setItem("Name", result.data.name);
        AsyncStorage.setItem("No_HP", result.data.no_hp);
        AsyncStorage.setItem("image", result.data.image);
        AsyncStorage.setItem("bagian", result.data.bagian);
        navigation.replace('Home');
        setEmail("");
        setPassword("");
      } else {
        console.log("Login Failed");
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        Alert.alert("PHP 404 not found");
        console.log(error.response);
      }
    });

  }


      
      
    
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  
  return(
    <LinearGradient colors={['#fc4a1a', '#f7b733']} style={{flex:1}}>
      <StatusBar backgroundColor={'#f5f7fa'} barStyle='dark-content'/>
      <View style={{justifyContent:'center', alignItems:'center',}}>
      <Image source={require('../../Assets/Images/LogoFH.png')}
      style={{
        marginTop:'50%',
        width: 200,
        height: 200,
      }}
      />
      <Text style={{marginTop:10,fontSize:25,fontWeight:'bold',}}>LOGIN FORM</Text>
      </View>
      <View style={{
        flexDirection:'row',
        backgroundColor:'#FFFFFF'
        ,marginHorizontal:10,
        borderRadius:15,
        padding:5,
        marginTop:50
        
      }}>
       <View style={{justifyContent:'center', alignItems:'center',   }}>
      <Icon name="envelope" size={38} color="#bdbdbd" style={{marginHorizontal:25}}/>
      </View>
      <TextInput value={email} style={{
        backgroundColor:'#FFFFFF',
        marginHorizontal:10,
        borderRadius:15}} 
        onChangeText={setEmail}
        placeholder='Email'
        secureTextEntry={false}
        />
      </View>
      <View style={{
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        marginHorizontal:10,
        borderRadius:15,
        marginTop:20,
        padding:5
      }}>
      <View style={{
        justifyContent:'center',
        alignItems:'center',}}>
      <Icon name="lock" size={38} color="#bdbdbd" style={{marginHorizontal:25}}/>
      </View>
      <TextInput value={password} style={{
        backgroundColor:'#FFFFFF',
        marginHorizontal:10,
        marginRight:50,
        borderRadius:15}} 
        onChangeText={setPassword}
        placeholder='password'
        secureTextEntry={true}
        />
        
      </View>
      <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: 10,
            marginTop:20,
            marginHorizontal: 20,
            borderRadius:15
          }}
          onPress={Submit}
          >
          
          <Text style={{color:'#000000',fontWeight:'bold'}}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity
          style={{
            padding: 10,
            marginTop:20,
            marginHorizontal: 20,
            borderRadius:15,
          }}
          onPress={() => navigation.navigate('Register') }
          >
          
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            marginTop:20,
            marginHorizontal: 20,
            borderRadius:15,
          }}
          onPress={() => navigation.navigate('Forgot Password')}
          >
          
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>forgotPassword?</Text>
        </TouchableOpacity>
        </View>
        </LinearGradient>

); 
}



export default LoginPage;