import colors, { black, blue, gray, white } from "./colors";
import { Theme } from "./interfaces";
import typescale from "./typescale";

export const darkTheme: Theme = {
  bgColor: black,
  bgAccentColor: gray.gray500,
  textColor: white,
  primaryColor: blue.blue200,
  secondaryColor: blue.blue100,
  colors,
  typescale,
  fontFamily: "'Rubik', sans-serif",
};

export const lightTheme: Theme | Object = {};
