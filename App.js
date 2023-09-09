import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        source={{uri: 'https://ewiseonline.edu.vn/login/'}}
      />
    </View>
  );
};

export default App;
