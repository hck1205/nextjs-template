const COLORS = Object.freeze({
  'white-100': '#fff',
});

export const WHITE = (number: Number) => COLORS[`white-${number}`];
export const BLUE = (number: Number) => COLORS[`blue-${number}`];
export const GRAY = (number: Number) => COLORS[`gray-${number}`];
