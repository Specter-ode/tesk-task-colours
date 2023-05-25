export const getMatchingColors = (colorToCheck, palette) => {
  function calculateColorDistance(paletteColor) {
    const rDiff = colorToCheck.rgbObj.r - paletteColor.r;
    const gDiff = colorToCheck.rgbObj.g - paletteColor.g;
    const bDiff = colorToCheck.rgbObj.b - paletteColor.b;
    return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
  }

  const colorDistances = [];

  for (const color of palette) {
    const distance = calculateColorDistance(color.rgbObj);
    colorDistances.push({ color, distance });
  }

  return colorDistances
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 7)
    .map(item => item.color);
};
