import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Button, ScrollView} from 'react-native';

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginVertical: 20, paddingHorizontal: 20}}>
        <View>
          <Button
            title="Spinner Test"
            onPress={() => props.navigation.navigate('Spinner')}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            title="Toast Test"
            onPress={() => props.navigation.navigate('Toast')}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            title="File Test"
            onPress={() => props.navigation.navigate('File')}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            title="Font Test"
            onPress={() => props.navigation.navigate('Font')}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            title="Accordion Test"
            onPress={() => props.navigation.navigate('Accordion')}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            title="Slider Test"
            onPress={() => props.navigation.navigate('Slider')}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            title="Brightness Test"
            onPress={() => props.navigation.navigate('Brightness')}
          />
        </View>
        <View style={{marginTop: 50}}>
          <Button
            title="Native Module"
            onPress={() => props.navigation.navigate('NativeModule')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
