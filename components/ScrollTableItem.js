import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {
  getInputRangeForAnimated,
  getOutputRangeForAnimated,
} from '../functions';

const clamp = (min, max, val) => (val < min ? min : val > max ? max : val);

const getFontSize = (len) => {
  if (len < 5) {
    return 56;
  }

  return clamp(22, 56, 56 - 14 * (len - 4));
};

const getDelaySpeed = (len) => {
  if (len < 4) {
    return 5;
  }
  return clamp(5, 10, 5 + len * 4);
};

const ScrollTableItem = ({
  animatedValue,
  pageWidth,
  size,
  position,
  children = '',
}) => {
  const translatePosition = React.useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: getInputRangeForAnimated(pageWidth, size),
        outputRange: getOutputRangeForAnimated(-100, 0, position, size, 100),
      }),
    [animatedValue, pageWidth, position, size],
  );

  const delaySpeed = React.useMemo(() => getDelaySpeed(children.length), [
    children,
  ]);

  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateY: translatePosition}]},
      ]}>
      {children.split('').map((item, index, arr) => {
        const localTranslate = translatePosition.interpolate({
          inputRange: [-100, -100 / delaySpeed, 0, 100 / delaySpeed, 100],
          outputRange: [
            0,
            (-100 / delaySpeed) * index,
            0,
            (100 / delaySpeed) * (arr.length - index - 1),
            0,
          ],
        });

        return (
          <Animated.Text
            style={[
              styles.mainText(children.length),
              {transform: [{translateY: localTranslate}]},
            ]}
            key={index}>
            {item}
          </Animated.Text>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
  },
  mainText(size) {
    return {
      fontSize: getFontSize(size),
      fontFamily: 'EuclidCircularA-Bold',
      lineHeight: 67,
      color: '#fff',
      textAlign: 'center',
    };
  },
});

export default React.memo(ScrollTableItem, () => false);
