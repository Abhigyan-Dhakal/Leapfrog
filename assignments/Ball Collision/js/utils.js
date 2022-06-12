// Function to generaterandom integer between two provided numbers
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// Function to generate random color
const getRandomColor = () => {
  const randomColorIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomColorIndex];
};

// Function to convert given number into pixels
const toPx = (value) => {
  return `${value}px`;
};

// Functino to get the distance when coordinates for two balls are provided
const getDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
