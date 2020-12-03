import React,{useState,useCallback} from 'react';
import {View,Text,TouchableHighlight,SafeAreaView,Button,StyleSheet,TextInput} from 'react-native'
import RangeSlider from 'rn-range-slider';

const styles = StyleSheet.create({
    thumb: {
      width: 20,
      height: 20,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#7f7f7f',
      backgroundColor: '#ffffff',
    },
    railSelected: {
        height: 4,
        backgroundColor: '#4499ff',
        borderRadius: 2,
    },
    rail: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#7f7f7f',
    },
});
const RailSelected = () => (
    <View style={styles.railSelected}/>
);
const Rail = () => (
    <View style={styles.rail}/>
);
const Thumb = ()=>(
    <View style={styles.thumb}/>
)

export default (()=>{
    const [mode,setMode] = useState("slider");
    const [low,setLow] = useState(0);

    const onHandleChnage = useCallback((_low)=>{
        setLow(_low)
    },[])

    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const changeMode = (_mode)=>{
        setMode(_mode)
    }
    return (
        <SafeAreaView>
            <View style={{height:100,justifyContent:'space-between',marginTop:20}}>
                <Button title="slider" onPress={()=>changeMode("slider")}/>
                <Button title="input" onPress={()=>changeMode("input")}/>
            </View>
            <View style={{marginTop:20}}>
                {
                    mode === "slider" ?
                        <View>
                            <RangeSlider 
                                min={0}
                                max={100}
                                low={Number(low)}
                                step={1}
                                disableRange={true}
                                floatingLabel={false}
                                onValueChanged={onHandleChnage}
                                renderThumb={renderThumb}
                                renderRail={renderRail}
                                renderRailSelected={renderRailSelected}
                            />
                            <View style={{marginTop:20,justifyContent:'center',alignItems:"center"}}>
                                <Text>{low}</Text>
                            </View>
                        </View>
                        :
                        <View style={{backgroundColor:"green"}}>
                            <TextInput value={String(low)} onChangeText={(text)=>setLow(text)}/>
                        </View>
                }
            </View>
        </SafeAreaView>
    )
})