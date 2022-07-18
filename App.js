import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from '@react-navigation/native'

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import Main from './components/Main'
import Chat from './components/Chat'


const AppSwitchNavigator = createSwitchNavigator({
  //HomeScreen: HomeScreen,
  Main: Main,
  Chat: Chat,
  
  //LoginScreen: LoginScreen,
  //LoadingScreen: LoadingScreen,
  

})

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render(){ return <AppNavigator/>
}
}