import React from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';
import Pagination from './Pagination';
import ScoreTable from './ScoreTable';

const ScrollViewBar = ({data: {scores, labels}}) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useMemo(() => new Animated.Value(0), []);

  return (
    <View
      onLayout={({
        nativeEvent: {
          layout: {width: nativeWidth},
        },
      }) => {
        setWidth(nativeWidth);
      }}
      style={styles.container}>
      {!!width && (
        <ScoreTable
          scores={scores}
          animatedValue={animatedValue}
          pageWidth={width * 0.5}
        />
      )}
      <Animated.ScrollView
        decelerationRate="fast"
        snapToOffsets={new Array(labels.length)
          .fill(0)
          .map((_, index) => width * 0.5 * index)}
        snapToEnd={false}
        style={styles.contentWrapper(width)}
        conentContainerStyle={styles.contentContainer(width)}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animatedValue,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal>
        {labels.map((label, index) => (
          <Text numberOfLines={1} style={[styles.text(width)]} key={index}>
            {label}
          </Text>
        ))}
        <View style={styles.endEmpty(width)} />
      </Animated.ScrollView>
      {!!width && (
        <Pagination
          scrollAnimatedValue={animatedValue}
          pageWidth={width * 0.5}
          pagesLength={labels.length}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 148,
    marginLeft: 21,
    marginRight: 21,
    marginTop: 30,
  },
  contentWrapper(size) {
    return {
      paddingLeft: size * 0.25,
    };
  },
  contentContainer(size) {
    return {
      height: 148,
      flexGrow: 1,
    };
  },
  endEmpty(size) {
    return {
      width: size * 0.5,
    };
  },
  text(size) {
    return {
      fontFamily: 'EuclidCircularA-Bold',
      fontSize: 14,
      letterSpacing: 0.3,
      marginTop: 110,
      color: '#fff',
      width: size * 0.5,
      textAlign: 'center',
    };
  },
});

export default ScrollViewBar;
