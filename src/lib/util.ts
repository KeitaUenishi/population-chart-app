export const randomColorString = () => {
  const r = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
  const g = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
  const b = ("0" + Math.floor(Math.random() * 255).toString(16)).slice(-2);
  const color = "#" + r + g + b;

  return color;
};
