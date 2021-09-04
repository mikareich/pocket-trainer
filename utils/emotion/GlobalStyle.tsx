import React from "react";
import { useTheme, Global, css } from "@emotion/react";

function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          min-height: 100vh;
          background-color: ${theme.bgColor};
          font-family: ${theme.fontFamily};
          color: ${theme.textColor};
        }
      `}
    />
  );
}

export default GlobalStyle;
