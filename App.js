import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import FundraisingScreen from './src/screens/FundraisingScreen';
import MapScreen from './src/screens/MapScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home" 
        activeColor="crimson"
      >
        <Tab.Screen 
          name="Fundraising" 
          component={FundraisingScreen} 
        />
        <Tab.Screen 
          name="Map" 
          component={MapScreen} 
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
        />
        <Tab.Screen 
          name="Schedule" 
          component={ScheduleScreen} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
