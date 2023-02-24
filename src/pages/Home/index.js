import React,{ Component } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet, SafeAreaView, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";
import qs from "qs";
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import SweetAlert from "react-native-sweet-alert";
import LinearGradient from 'react-native-linear-gradient';




const Home = () => {
  const [location, setLocation] = React.useState();
  let date = new Date();
  let formattedDate = date.toLocaleDateString('en-US', {day: '2-digit', month:'short', year:'numeric'});
  const [dataToken, setDataToken] = React.useState();
  const [dataName, setDataName] = React.useState();
  const [dataNo_HP, setDataNo_HP] = React.useState();
  const [dataImage, setDataImage] = React.useState();
  const [dataBagian, setDataBagian] = React.useState();
  const [dataLat, setDataLat] = React.useState();
  const [absenMasukTime, setAbsenMasukTime] = React.useState();
  const [datecreated, setDateCreated] = React.useState();
  const dataTime = formattedDate
  const handleAbsenMasuk = () => {
      const dataName = setDataName;
      const date = new Date().toLocaleTimeString();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = `${hour}:${minute}`;
  axios({
    method: 'post',
    url: 'https://farhancollection.id/rest_api/',
    data: qs.stringify({
        email: dataToken,
        action: 'absen',
        name: dataName,
        status: 'MASUK',
        tanggal : date,
        date_created:time,
        lat: location.latitude,
        long: location.longitude
      })
    })
    .then(result => {
      if (result.status === 200){
       SweetAlert.showAlertWithOptions({
            title: 'Anda telah berhasil absen hari ini  ',
            subtitle: 'Resource not found',
            style: 'success',
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#2e76e8',
          });
          setAbsenMasukTime(date);
          setDateCreated(time);
      }
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        
        SweetAlert.showAlertWithOptions({
          title: 'Absensi harus berada di area kantor',
          subtitle: 'Resource not found',
          style: 'danger',
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#ff0000',
        });
      }else{
        SweetAlert.showAlertWithOptions({
          title: 'Anda sudah absen hari ini ',
          subtitle: 'Resource not found',
          style: 'danger',
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#ff0000',
        });
      }
  })
}
    const handleGetToken = async ()=> {
        try {
            const token = await AsyncStorage.getItem('AccessToken');
            if (token !== null) {
              setDataToken(token);
            }
            const Name = await AsyncStorage.getItem('Name');
            if (Name !== null) {
              setDataName(Name);
            }
            const No_HP = await AsyncStorage.getItem('No_HP');
            if (No_HP !== null) {
              setDataNo_HP(No_HP);
            }
            const Image = await AsyncStorage.getItem('image');
            if (Image !== null){
                setDataImage(Image);
            }
            const Bagian = await AsyncStorage.getItem('bagian');
            if (Bagian !== null){
                setDataBagian(Bagian);
            }
            const lat = await AsyncStorage.getItem('bagian');
            if (lat !== null){
                setDataLat(lat);
            }

          } catch (e) {
            console.log('Error retrieving token' + e);
          }
          
        };
      React.useEffect(() => {
          Geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
        }, []);

    React.useEffect(() => {
        handleGetToken();
    }, []);

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#fc4a1a', '#f7b733']} style={{flex:1}}>
         <View style={{alignItems:'center',justifyContent:'center',marginTop:'25%',}}>
    <Image source={{uri:'https://farhancollection.id/rest_api/upload/' + dataImage}} style={{width:300, height:300, borderRadius:150,elevation:5,borderWidth:10,borderColor:'#685E5E'}}/>
    <Text style={{
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: 25,
      textDecorationLine: 'underline',
      textTransform:'uppercase',
      }}>{dataName}</Text>
      <Text style={{
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 15,
        textAlign: 'center',
        mixBlendMode: 'hard-light',
      }}>{dataBagian}</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:'10%',}}>
          <TouchableOpacity
          onPress={handleAbsenMasuk}>
        <View style={{width:150,height:150,borderRadius:125,backgroundColor:'#FFFFFF',marginRight:'25%',elevation:5}}>
        <Icon name="sign-in-alt" size={60} color="#000000" style={{marginTop:'30%', marginLeft:'30%'}}/>
        </View>
          </TouchableOpacity>
          <TouchableOpacity>
        <View style={{width:150,height:150,borderRadius:125,backgroundColor:'#fc4a1a',elevation:5}}>
        <Icon name="sign-out-alt" size={60} color="#000000" style={{marginTop:'30%', marginLeft:'30%'}}/>
        </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:'5%'}}>
          <Text style={{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 15,
    marginRight:'35%',
    
    }}>Absen Masuk</Text>
          <Text style={{
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 15,
    }}>Absen Pulang</Text>
        </View>
        <View style={{backgroundColor:'#FFFFFF',width:450,height:200,marginTop:'4%',marginLeft:'4%',borderRadius:10}}>
          <Text style={{fontSize:20,color:'#000000',marginTop:'2%',marginLeft:'4%'}}>{dataTime}</Text>
          <Text style={{fontSize:15,color:'#000000',marginTop:'3%',marginLeft:'5%'}}>Presensi Masuk</Text>
        <Text style={{ fontSize: 15, color: '#000000', marginLeft: '5%' }}>{datecreated}</Text>
          <Text style={{fontSize:15,color:'#000000',marginTop:'10%',marginLeft:'5%'}}>Presensi Pulang</Text>
          <Text style={{fontSize:15,color:'#000000',marginLeft:'5%'}}>Pukul: 22:00 WIB</Text>
        </View>
        <View>
           <View style={styles.mobileBottomNav}>
            <TouchableOpacity>
          <Icon name="home" size={30} color="#000000" style={{marginRight:'25%',marginTop:10}} />
          <Text style={{color:'#000000'}}>Beranda</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('History')}>
          <Icon name="clock" size={30} color="#000000" style={{marginRight:'25%',marginTop:10}} />
          <Text style={{color:'#000000'}}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('User')}
            >
          <Icon name="user" size={30} color="#000000" style={{marginRight:'16%',marginTop:10}} />
          <Text style={{color:'#000000'}}>User</Text>
            </TouchableOpacity>
          </View>
        </View>
         </LinearGradient>
      )
    }
    
  
    
  
   

    
 
    export default Home;
    
    const styles = StyleSheet.create({
      mobileBottomNav: {
        justifyContent:'flex-end',
        flexDirection:'row',
        width: '100%',
        height: 72,
        left: 0,
        top: '9%',
        backgroundColor: '#FFFFFF'
      },
    });
    