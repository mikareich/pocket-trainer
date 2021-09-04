import "@emotion/react";
import { Theme as ITheme } from "./interfaces";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
