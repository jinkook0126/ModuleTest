import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const FontScreen: () => React$Node = (props) => {
  let globalStyle = require('../common/globalStyle');

  return (
    <SafeAreaView
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={{marginTop: 15}}>
        <Text style={{fontSize: 16}}>아래는 FONT가 적용된 TEXT 입니다.</Text>
      </View>
      <View style={{marginTop: 1}}>
        <Text style={{fontSize: 40, fontFamily: 'CAVEAT'}}>
          blacklivesmatter
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 16}}>
          아래는 Global CSS 와 FONT가 적용된 TEXT 입니다.
        </Text>
      </View>
      <View style={{marginTop: 1}}>
        <Text
          style={[globalStyle.textRed, {fontSize: 40, fontFamily: 'CAVEAT'}]}>
          Global StyleSheet and Font
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FontScreen;
