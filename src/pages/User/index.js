import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView ,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';


const User = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient colors={['#fc4a1a', '#f7b733']} style={{flex:1}}>
    <Profile/>
    <Tombol/>
    <View style={styles.mobileBottomNav}>
    <TouchableOpacity
    onPress={() => navigation.navigate('Home')}
    >
    <Icon name="home" size={30} color="#000000" style={{marginRight:'25%',marginTop:10}} />
    <Text style={styles.NavText}>Beranda</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    onPress={() => navigation.navigate('History')}>
    <Icon name="clock" size={30} color="#000000" style={{marginRight:'25%',marginTop:10}} />
    <Text style={styles.NavText}>History</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate('User')}
    >
    <Icon name="user" size={30} color="#000000" style={{marginRight:'16%',marginTop:10}} />
    <Text style={styles.NavText}>User</Text>
    </TouchableOpacity>
    </View>
      </LinearGradient>
  )
}


const Profile = () => {
  return(
    <View style={{alignItems:'center',justifyContent:'center',marginTop:'25%',}}>
    <Image source={{uri:'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-1/293589701_1186663318566359_259712550471396113_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFfGrdOqxi4uhmXnsPKnx5RmQ4tMqZCShWZDi0ypkJKFaQQ6vb7VvX-bo6fwHOXRBCx7Tntk6NudNQvLUYO4JjS&_nc_ohc=nz9b7lGfW3QAX-JUpuC&_nc_ht=scontent-sin6-1.xx&oh=00_AfDmkA24Rx_-5JvS1FHSCtoo8rb-TtVK-o-vdSGKSFtamQ&oe=63D28316'}} style={{width:300, height:300, borderRadius:150}}/>
    <Text style={{
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: 25,
      textDecorationLine: 'underline',
      textTransform:'uppercase',
      }}>MUHAMMAD RIZKY FEBRIANDI</Text>
      <Text style={{
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: 15,
        textAlign: 'center',
        mixBlendMode: 'hard-light',
      }}>IT Support</Text>
    </View>
  )
}

const Tombol = () => {
  const navigation = useNavigation();
  return(
    <View style={{marginLeft:'8%',justifyContent:'flex-end',flex:1,marginBottom:'5%'}}>
     <TouchableOpacity style={{backgroundColor:'#FFFFFF',width:'90%',height:'15%',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:'5%',flexDirection:'row'}}
      onPress={() => navigation.replace('Login')}>
        <Icon name="cog" size={38} color="#bdbdbd" style={{marginHorizontal:25}}/>
        <Text style={{color:'EA4335',fontSize:20,marginRight:'19%'}}>Update Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#FFFFFF',width:'90%',height:'15%',borderRadius:20,alignItems:'center',justifyContent:'center',marginBottom:'15%',flexDirection:'row'}}
       onPress={() => navigation.replace('Login')}> 
       <Icon name="lock" size={38} color="#bdbdbd" style={{marginHorizontal:25}}/>
        <Text style={{color:'EA4335',fontSize:20,marginRight:'10%'}}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#F92323',width:'90%',height:'8%',borderRadius:20,alignItems:'center',justifyContent:'center',flexDirection:'row'}}
      onPress={() => navigation.replace('Login')}> 
      <Icon name="sign-out-alt" size={25} color="#000000" style={{marginHorizontal:25}}/>
        <Text style={{color:'#000000',marginRight:'10%'}}>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}



export default User;


const styles = StyleSheet.create({
text :{
fontSize:20,
fontWeight:'bold'
},
mobileBottomNav: {
  justifyContent:'flex-end',
  flexDirection:'row',
  width: '100%',
  height: 72,
  left: 0,
  top: '2%',
  backgroundColor: '#FFFFFF'
},
NavText:{
  color:'#000000'
}
});