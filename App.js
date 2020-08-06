/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import SpinnerScreen from './src/screen/Spinner';
import HomeScreen from './src/screen/Home';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';
import ToastScreen from './src/screen/Toast'
import { RootSiblingParent } from 'react-native-root-siblings';
import ToastComponent from './src/component/Toast'
import ReadFileScreen from './src/screen/ReadFile'
import FontScreen from './src/screen/Font'



const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const SpinnerComponent = () =>{
  const stat = useSelector(state => state.spinner.status);
  return (
    <Spinner
      visible={stat}
      color="#8D3981"
      animation='fade'
    />
  )
}


const App: () => React$Node = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <SpinnerComponent />
        <ToastComponent />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Module Test' }}
            />
            <Stack.Screen name="Spinner" component={SpinnerScreen} />
            <Stack.Screen name="Toast" component={ToastScreen} />
            <Stack.Screen name="File" component={ReadFileScreen} />
            <Stack.Screen name="Font" component={FontScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
});

export default App;