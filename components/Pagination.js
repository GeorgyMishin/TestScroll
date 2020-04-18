import React from 'react';
import {View, StyleSheet} from 'react-native';
import Page from './Page';

const Pagination = ({scrollAnimatedValue, pageWidth, pagesLength}) => {
  return (
    <View style={styles.container}>
      {new Array(pagesLength).fill(null).map((_, index) => (
        <Page
          size={pagesLength}
          animatedValue={scrollAnimatedValue}
          pageWidth={pageWidth}
          position={index}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default React.memo(Pagination);
