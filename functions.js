export const getInputRangeForAnimated = (pageWidth, size) =>
  new Array(size + 2).fill(0).map((value, index) => {
    if (index === 0) {
      return -pageWidth;
    }

    return pageWidth * (index - 1);
  });

export const getOutputRangeForAnimated = (
  outputDefault,
  outputPosition,
  position,
  size,
  valueAfterPosition,
) =>
  new Array(size + 2).fill(outputDefault).map((item, index) => {
    if (index === position + 1) {
      return outputPosition;
    }

    if (position + 1 > index) {
      return valueAfterPosition || outputDefault;
    }

    return outputDefault;
  });
