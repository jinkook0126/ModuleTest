import React from 'react';
import {
  Text,
} from 'react-native';
import Toast from 'react-native-root-toast';
import { useSelector, useDispatch } from 'react-redux';
import * as toast from '../actions/toast'


const ToastComponent: () => React$Node = (props) => {
  const dispatch = useDispatch();
  const stat = useSelector(state => state.toast.status);
  const bgColor = useSelector(state => state.toast.bgColor);
  const txtColor = useSelector(state => state.toast.txtColor);
  const msg = useSelector(state => state.toast.text);

  return (
    <Toast
      duration={Toast.durations.LONG}
      visible={stat}
      position={-50}
      shadow={true}
      animation={false}
      hideOnPress={true}
      delay={0}
      backgroundColor={bgColor}
      textColor={txtColor}
      onShown={()=>{
        setTimeout(() => {
          dispatch(toast.hideToast())
        }, 3500);
      }}
      >{msg}</Toast>
  );
};

export default ToastComponent;