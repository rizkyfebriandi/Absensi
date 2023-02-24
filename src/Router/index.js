import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash,LoginPage,Home,Register,ForgotPassword,History,User } from '../pages';


const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>            
            <Stack.Screen 
            name="Splash" 
            component={Splash}
            options={{
                headerShown: false,
            }} />
            <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} 
            options={{
                headerShown:false,
            }}/>
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
            <Stack.Screen name="History" component={History} 
            options={{
            headerShown:false,
            }}/>
            <Stack.Screen name="User" component={User} 
            options={{
            headerShown:false,
            }}/>
        </Stack.Navigator>
    )
}

export default Router;