import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Home from './components/Home';
import Patients from './components/Patients';
import PatientDetails from './components/PatientDetails';
import PatientGallery from './components/PatientGallery';
import Search from './components/Search';
import Stock from './components/Stock';

import Planing from './components/Planing';
import Settings from './components/Settings';
import Admins from './components/Admins';

const Stack = createStackNavigator();
class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator
      initialRouteName="splashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="patients" component={Patients} />
      <Stack.Screen name="patientDetails" component={PatientDetails} />
      <Stack.Screen name="patientGallery" component={PatientGallery} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="stock" component={Stock} />
  
      <Stack.Screen name="planing" component={Planing} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="admins" component={Admins} />
      










    </Stack.Navigator>
  );
  render() {
    return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
  }
}

export default App;
