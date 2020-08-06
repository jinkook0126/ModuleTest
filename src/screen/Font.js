import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

const FontScreen: () => React$Node = (props) => {

  return (
    <SafeAreaView style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <View>
            <Text>아래는 FONT가 적용된 TEXT 입니다.</Text>
        </View>
        <View style={{marginTop:30}}>
            <Text style={{fontSize:40,fontFamily:"CAVEAT"}}>blacklivesmatter</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default FontScreen;