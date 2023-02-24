import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from '../pages/LoginPage';
import {ROUTES} from '../ROUTES';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.LOGIN} component={LoginPage} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;