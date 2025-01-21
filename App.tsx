import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import LoginTemplete from './Screens/LoginTemplete';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    //<NavigationContainer>
      <LoginScreen/>
    // <RegisterScreen/>
    // <LoginTemplete/>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
