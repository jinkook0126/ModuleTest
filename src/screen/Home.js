import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';

const HomeScreen: () => React$Node = (props) => {
  return (
    <SafeAreaView style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <View>
            <Button title="Spinner Test" onPress={()=>props.navigation.navigate("Spinner")}/>
        </View>
        <View style={{marginTop:50}}>
            <Button title="Toast Test" onPress={()=>props.navigation.navigate("Toast")}/>
        </View>
        <View style={{marginTop:50}}>
            <Button title="File Test" onPress={()=>props.navigation.navigate("File")}/>
        </View>
        <View style={{marginTop:50}}>
            <Button title="Font Test" onPress={()=>props.navigation.navigate("Font")}/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;
