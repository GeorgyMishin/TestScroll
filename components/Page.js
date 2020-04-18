import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {
  getInputRangeForAnimated,
  getOutputRangeForAnimated,
} from '../functions';

const Page = ({position, animatedValue, pageWidth, size}) => {
  const width = React.useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: getInputRangeForAnimated(pageWidth, size),
        outputRange: getOutputRangeForAnimated(5, 16, position, size),
      }),
    [animatedValue, pageWidth, position, size],
  );

  const opacity = React.useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: getInputRangeForAnimated(pageWidth, size),
        outputRange: getOutputRangeForAnimated(0.3, 1, position, size),
      }),
    [animatedValue, pageWidth, position, size],
  );

  return (
    <Animated.View
      style={[
        styles.page,
        {
          width,
          opacity,
        },
      ]}
    />
  );
};

export default React.memo(Page, () => false);

const styles = StyleSheet.create({
  page: {
    marginHorizontal: 3,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#fff',
    opacity: 0.3,
  },
});
