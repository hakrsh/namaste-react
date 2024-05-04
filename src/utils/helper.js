export const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomString = () => {
  return (Math.random() + 1).toString(36).substring(2);
};
