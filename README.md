# ModuleTest

## Spinner
react-native-loading-spinner-overlay

## 문서 읽기
react-native-document-picker

## Toast
react-native-root-siblings  
react-native-root-toast

## Font
- android
  - /android/app/src/main/assets/fonts 에 폰트를 집어넣고  
  css처럼 **fontFamily:"CAVEAT"** 을 통해 font 적용

- ios 
  - Xcode 에서 넣어줌. 자세한건 블로그 참조

- 참고 블로그
  - https://dev-yakuza.github.io/ko/react-native/react-native-custom-font/

- 특이사항
  - android 에 font디렉토리 없을 경우 **react-native link** 입력해보기

## Global StyleSheet
- 선언  
  - **src/common/globalStyle.js** 처럼 react-native의 StyleSheet를 import 하여 StyleSheet를 생성 및 css를 작성햐여 export한다.

- 사용
  - Font.js 참고  
  ``` 
    let globalStyle = require('../common/globalStyle'); 
  ```
  ```
    <Text style={[globalStyle.textRed,{fontSize:40,fontFamily:"CAVEAT"}]}>Global StyleSheet and Font</Text>
  ```