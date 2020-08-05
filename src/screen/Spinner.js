import React,{useState, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/spinner'
import {
  SafeAreaView,
  View,
  Button,
} from 'react-native';


const SpinnerScreen: () => React$Node = () => {
    const dispatch = useDispatch();
    const showSpinner = useCallback(()=>{
        dispatch(actions.showSpinner())
        setTimeout(() => {
            dispatch(actions.hideSpinner() )
        }, 2000);
    })

    return (
    <SafeAreaView>
        <View style={{marginTop:30}}>
          <Button title="spinner 띄우기" onPress={showSpinner} />
        </View>
    </SafeAreaView>
    );
};

export default SpinnerScreen;
