import React, {useCallback} from 'react';
import {View, Alert, Button, NativeModules, StyleSheet} from 'react-native';

export default () => {
  const showToast = useCallback(() => {
    NativeModules.Custom.show();
  }, []);

  const getDeviceName = useCallback(() => {
    const getNativeDeviceId = async () => {
      const id = await NativeModules.Custom.getDeviceName();
      Alert.alert('알림', id);
    };
    getNativeDeviceId();
  }, []);

  const navigateActivity = useCallback(() => {
    Alert.alert('알림', 'zz');
  }, []);

  return (
    <View style={styles.wrap}>
      <Button title="토스트" onPress={showToast} />
      <Button title="디바이스 ID" onPress={getDeviceName} />
      <Button title="다른 Activity" onPress={navigateActivity} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {flex: 1, backgroundColor: 'tomato', justifyContent: 'space-around'},
});
