import React,{useRef, useState} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';

export default ()=>{
    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 150],
    });
    const toggleListItem = () => {
        if (open) {
          Animated.timing(animatedController, {
            duration: 300,
            toValue: 0,
            useNativeDriver:false
          }).start();
        } else {
          Animated.timing(animatedController, {
            duration: 300,
            toValue: 1,
            useNativeDriver:false
          }).start();
        }
        setOpen(!open);
      };

    return (
        <SafeAreaView>
            <View>
                <View style={{backgroundColor:"red",height:50,justifyContent:"center",alignItems:"center"}}>
                    <TouchableWithoutFeedback onPress={toggleListItem}>
                        <Text style={{fontSize:20}}>Accordion 타치타치!</Text>
                    </TouchableWithoutFeedback>
                </View>
                <Animated.View style={{height:bodyHeight,overflow:'hidden'}}>
                    <View style={{height:50,backgroundColor:"green"}}></View>
                    <View style={{height:50,backgroundColor:"blue"}}></View>
                    <View style={{height:50,backgroundColor:"yellow"}}></View>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};
