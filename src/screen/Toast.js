import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import Toast from 'react-native-root-toast';
import { useDispatch } from 'react-redux';
import * as toast from '../actions/toast'


const ToastScreen: () => React$Node = (props) => {
  const dispatch = useDispatch();

  const showToast = () =>{
    dispatch(toast.onToastAlert('기본입니다.'))
  }

  const errorToast = () =>{
    dispatch(toast.onErrorAlert('에러입니다.'))
  }

  return (
    <SafeAreaView style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <View>
            <Button title="Default Toast" onPress={showToast} />
        </View>
        <View style={{marginTop:50}}>
            <Button title="ERROR Toast" onPress={errorToast} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default ToastScreen;