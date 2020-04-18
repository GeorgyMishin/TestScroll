import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import ScrollTableItem from './ScrollTableItem';

const tableBackground = require('../assets/table-background.png');

const ScrollTable = ({animatedValue, pageWidth, scores}) => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={tableBackground}
      style={styles.container}>
      {scores.map((score, index) => (
        <ScrollTableItem
          animatedValue={animatedValue}
          pageWidth={pageWidth}
          size={scores.length}
          key={index}
          position={index}>
          {score}
        </ScrollTableItem>
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 212,
    height: 100,
    position: 'absolute',
    alignSelf: 'center',
    top: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 56,
    lineHeight: 67,
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
  },
});

export default ScrollTable;
