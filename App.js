import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InlineStyle from './screen/InlineStyle';
import LocalStyle from './screen/LocalStyle';
import GlobalStyle from './screen/GlobalStyle';
import MultipleStyleObject from './screen/MultipleStyleObject';

export default function App() {
  return (
    <View style={styles.container}>
      <InlineStyle />

      <LocalStyle />

      <GlobalStyle />

      <MultipleStyleObject />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
