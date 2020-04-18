/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import ScrollViewBar from './components/ScrollViewBar';

// Change this with saving types and length
const data = {
  scores: ['1', '12', '123', '1234'],
  labels: [
    'Mindful minutes',
    'Current streak',
    'Longest streak',
    'Episodes completed',
  ],
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollViewBar data={data} />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090110',
  },
  backgroundImage: {
    height: 170,
    width: '100%',
  },
});

export default App;
