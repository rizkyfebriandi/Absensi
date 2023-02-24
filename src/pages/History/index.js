import { StyleSheet, Text, View, TouchableOpacity,Image, Alert,ScrollView} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';



const History = () => {
  return(
    <LinearGradient colors={['#fc4a1a', '#f7b733', '#fcb045']} style={{flex:1}}>
    <Profile/>
    <TotalHadir/>
    <HistoryAbsen/>
    <BottomNav/>
     </LinearGradient>
  )
}


const BottomNav = () => {
  const navigation = useNavigation();
  return(
    <View>
       <View style={styles.mobileBottomNav}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
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
  )
}

const Profile = () => {
  return(
    <View style={{alignItems:'flex-start',justifyContent:'flex-start',marginTop:'4%',marginLeft:'2%'}}>
    <Image source={{uri:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/293589701_1186663318566359_259712550471396113_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFfGrdOqxi4uhmXnsPKnx5RmQ4tMqZCShWZDi0ypkJKFaQQ6vb7VvX-bo6fwHOXRBCx7Tntk6NudNQvLUYO4JjS&_nc_ohc=nz9b7lGfW3QAX-JUpuC&_nc_ht=scontent-sin6-1.xx&oh=00_AfDmkA24Rx_-5JvS1FHSCtoo8rb-TtVK-o-vdSGKSFtamQ&oe=63D28316'}} 
    style={{width:100, height:100, borderRadius:150}}/>
    </View>
  )
}

const TotalHadir = () => {
  return(
    <View style={{flexDirection:'row',height:'15%',marginTop:'5%'}}>
      <View style={{width:'40%',height:'90%',backgroundColor:'#FFFFFF',marginTop:'2%',opacity:0.67,marginLeft:'1%',borderRadius:50,alignItems:'center',borderWidth:5,elevation:5}}>
        <Text style={{marginTop:'4%',fontSize:20,color:'#000000'}}>Total Hadir</Text>
        <Text style={{fontSize:50,color:'#000000',marginTop:'8%'}}>31</Text>
      </View>
      <View style={{width:'55%',height:'90%',backgroundColor:'#FFFFFF',marginTop:'2%',opacity:0.67,marginLeft:'2%',borderRadius:50,alignItems:'center',borderWidth:5,elevation:5}}>
        <Text style={{fontSize:20,color:'#000000',marginTop:'4%'}}>Jumlah Potongan Telat</Text>
        <Text style={{fontSize:30,color:'#000000',marginTop:'8%'}}>Rp 100.000 ,-</Text>
      </View>
      </View>
  )
}

var
    m=2,
    y=2023
const HistoryAbsen = () => {
  let views = Array(28).fill(0).map((_, i) => (
    <View key={i} style={{width:'96%',height:90,backgroundColor:'#CFCFCFCF',marginLeft:'2%',marginTop:'2%',borderRadius:20}}>
      <Text style={{marginLeft:'5%',marginTop:'2%',color:'#000000'}}>{m} - {i + 1} - {y} </Text>
      <Text style={{marginLeft:'5%',marginTop:'2%',color:'#000000'}}>{"Jam Masuk :" + "10:00"}</Text>
      <Text style={{marginLeft:'5%',marginTop:'1%',color:'#000000'}}>{"jam pulang :" + "22:00"}</Text>
    </View>
  ))
  return(
    <View>
    <Text style={{marginTop:10,marginLeft:10,color:'#000000'}}>History Absensi :</Text>
    <ScrollView style={{width:'98%',height:'61.4%',backgroundColor:'#FFFFFF',marginTop:'2%',marginLeft:'1%',opacity:0.67,
    borderWidth:5,borderColor:'#FFFFFF'    
    }}>
    <View style={{width:'98%',height:'20%',backgroundColor:'#FFFFFF',marginLeft:'1%',borderRadius:30}}>
<>
{views}
</>
    </View>
    </ScrollView>
    </View>
  )
}




export default History;

const styles = StyleSheet.create({
  mobileBottomNav: {
    justifyContent:'flex-end',
    flexDirection:'row',
    width: '100%',
    height: 72,
    left: 0,
    top: '1%',
    backgroundColor: '#FFFFFF'
  },
});

