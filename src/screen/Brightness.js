import React from 'react';
import {View, SafeAreaView,Button} from 'react-native';
import DeviceBrightness from '@adrianso/react-native-device-brightness';


export default ()=>{

    const handleBrightness = (type)=>{
        if(type==='high') {
            DeviceBrightness.setBrightnessLevel(1);
        } else if(type==='mid') {
            DeviceBrightness.setBrightnessLevel(0.5);
        } else {
            DeviceBrightness.setBrightnessLevel(0);
        }
    }
    return (
        <SafeAreaView style={{justifyContent:'center',alignItems:"center",flex:1}}>
            <View style={{width:200}}>
                <Button title={"밝게"} onPress={()=>handleBrightness("high")}/>
            </View>
            <View style={{width:200,marginTop:50}}>
                <Button title={"중간"} onPress={()=>handleBrightness("mid")}/>
            </View>
            <View style={{width:200,marginTop:50}}>
                <Button title={"어둡게"} onPress={()=>handleBrightness("low")}/>
            </View>
        </SafeAreaView>
    )
}