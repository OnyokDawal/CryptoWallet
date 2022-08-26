import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Crypto from './screens/Crypto';


const Stack = createStackNavigator();

 const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Crypto">
        <Stack.Screen
          name="Crypto"
          component={Crypto}
          options={{
            title: 'Employee`s List', //Set Header Title
            headerShown:false
          }}
        />
        {/* <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Employee`s Details', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
     
   );
 };
 
 export default App;
 