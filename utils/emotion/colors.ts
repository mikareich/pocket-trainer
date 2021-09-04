import {
  BlueColorGroup,
  Colors,
  GrayColorGroup,
  GreenColorGroup,
  OrangeColorGroup,
  PurpleColorGroup,
  RedColorGroup,
  YellowColorGroup,
} from "./interfaces";

export const gray: GrayColorGroup = {
  gray100: "#ECEFF4",
  gray200: "#E5E9F0",
  gray300: "#D8DEE9",
  gray400: "#4C566A",
  gray500: "#434C5E",
  gray600: "#3B4252",
  gray700: "#2E3440",
};

export const blue: BlueColorGroup = {
  blue100: "#8FBCBB",
  blue200: "#88C0D0",
  blue300: "#81A1C1",
  blue400: "#5C6BC0",
};

export const red: RedColorGroup = {
  red100: "#BF616A",
};

export const orange: OrangeColorGroup = {
  orange100: "#D08770",
};

export const yellow: YellowColorGroup = {
  yellow100: "#EBCB8B",
};

export const green: GreenColorGroup = {
  green100: "#A3BE8C",
};

export const purple: PurpleColorGroup = {
  purple100: "#B48EAD",
};

export const black = gray.gray700;
export const white = gray.gray100;

const colors: Colors = {
  ...gray,
  ...blue,
  ...red,
  ...orange,
  ...yellow,
  ...green,
  ...purple,
  black,
  white,
};

export default colors;
