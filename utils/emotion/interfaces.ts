export interface GrayColorGroup {
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
}

export interface BlueColorGroup {
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
}

export interface RedColorGroup {
  red100: string;
}

export interface OrangeColorGroup {
  orange100: string;
}

export interface YellowColorGroup {
  yellow100: string;
}

export interface GreenColorGroup {
  green100: string;
}

export interface PurpleColorGroup {
  purple100: string;
}

export interface Colors
  extends GrayColorGroup,
    BlueColorGroup,
    RedColorGroup,
    OrangeColorGroup,
    YellowColorGroup,
    GreenColorGroup,
    PurpleColorGroup {
  black: string;
  white: string;
}

export interface Theme {
  bgColor: string;
  bgAccentColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  colors: Colors;
  typescale: {
    [scale: string]: string;
  };
  fontFamily: string;
}
