import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';


const ReadFileScreen: () => React$Node = (props) => {

  const onFileRead = async() =>{
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  return (
    <SafeAreaView style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <View>
            <Button title="파일 가져오기" onPress={onFileRead} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default ReadFileScreen;