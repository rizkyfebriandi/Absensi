import React from "react";
import { Text, View,TextInput,TouchableOpacity, Alert,StatusBar} from "react-native";
import SweetAlert from 'react-native-sweet-alert';
import qs from 'qs';
import axios from "axios";
import LinearGradient from 'react-native-linear-gradient';







const Register = () => {
    const Submit = () => {
axios({
    method: 'post',
    url: 'https://farhancollection.id/rest_api/',
    data: qs.stringify({
        name: nama,
        no_hp: nomor,
        email: email,
        password: password,
        password1: password1,
        action: 'register',
    })
})
    .then(res => {
        console.log('res :' , res);
     if (res.status === 200){
        SweetAlert.showAlertWithOptions({
            title: 'Successfully register , please login. ',
            subtitle: 'Resource not found',
            style: 'success',
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#2e76e8',

            
          });
     }
        setNama("");
        setNomor("");
        setEmail("");
        setPassword("");
        setPassword1("");
    })
    .catch(error => {
        console.log('Error :' ,error);
        if (error.response && error.response.status === 404) {
            SweetAlert.showAlertWithOptions({
                title: 'Make sure to enter the password correctly',
                subtitle: 'Resource not found',
                style: 'danger',
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#2e76e8',
              });
        } else if (error.response && error.response.status === 400){
            SweetAlert.showAlertWithOptions({
                title: 'Account already exists',
                subtitle: 'Resource not found',
                style: 'danger',
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#2e76e8',
              });
        }
      });

    }
    <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
    const [nama,setNama] = React.useState('');
    const [nomor,setNomor] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [password1,setPassword1] = React.useState('');
    return(
        <LinearGradient colors={['#fc4a1a', '#f7b733']} style={{flex:1}}>
        <Text style={styles.RegisterForm}>REGISTER FORM</Text>
        <View style={{marginTop:'25%'}}>
        <TextInput value={nama} style={styles.inputtext}
        placeholder='Nama Lengkap '
        onChangeText={(value) => setNama(value)}/>
        <View style={{marginTop:25}}>
        <TextInput value={nomor} style={styles.inputtext}
        placeholder='Masukan Nomor Hp Anda'
        onChangeText={(value) => setNomor(value)}/>
        <View style={{marginTop:25}}>
        <TextInput value={email} style={styles.inputtext}    
        placeholder='Email Anda'
        onChangeText={(value) => setEmail(value)}/>
        </View>
        <View style={{marginTop:25}}>
        <TextInput value={password} style={styles.inputtext}
        placeholder='Password'
        onChangeText={(value)=>setPassword(value)}
        secureTextEntry={true}/>
        <View style={{marginTop:25}}>
        <TextInput value={password1} style={styles.inputtext}
        placeholder='Confirm password'
        onChangeText={(value)=>setPassword1(value)}
        secureTextEntry={true}/>
        </View>
                <TouchableOpacity style={styles.Button}
                onPress={Submit}>
            <Text style={{
                color:'#000000',
                fontWeight:'bold'
            }}>REGISTER</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </LinearGradient>
        
        
        )
    }

    export default Register;
    
    
    
    const styles = {
    RegisterForm: {
      fontSize:75,
      margin:20,
      textAlign: 'center',
      fontWeight:'bold',

    },
    Background: {
      backgroundColor:'#2e76e8',
      height:'100%',
      width:'100%'
    },
    inputtext: {
        backgroundColor:'#FFFFFF',
         marginHorizontal:'20%',
         borderRadius:15,
         elevation:5
    },
    Button:{
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
        marginTop:20,
        marginHorizontal: '20%',
        borderRadius:15,
        marginTop:75,
        elevation:5
    },
    
  };