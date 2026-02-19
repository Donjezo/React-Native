import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Ios from '../screens/Ios';
import Android from '../screens/Android';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="iOS" component={Ios} />
      <Tab.Screen name="Android" component={Android} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
