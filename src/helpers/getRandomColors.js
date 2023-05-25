

export const getRandomColors = (colors) => {
    const randomColors = [];
    while (randomColors.length < 7) {
      const randomIndex =  Math.floor(Math.random() * colors.length)
      if (!randomColors.includes(colors[randomIndex])) {
        randomColors.push(colors[randomIndex]);
      }
    }
    return randomColors
}

