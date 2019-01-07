export const isInRange = function (value, a, b) {
  return value >= a && value <= b;
};

export const isEven = function (value) {
  let div = value / 2;
  return div === Math.round(div);
};

export const toIntegerRange = function (value, min, max) {
  let rangeValue = value;
  if (rangeValue < min) rangeValue = min;
  if (rangeValue > max) rangeValue = max;
  return Math.round(rangeValue);
};