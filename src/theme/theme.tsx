import { ThemeOptions } from "@mui/material";
import { cssBaseline } from "./baseCss";

const round = (value: number): number => Math.round(value * 1e5) / 1e5;
const pxToRem = (size: number): string => `${size / 16}rem`;
const buildVariant = (
  fontWeight: number,
  size: number,
  lineHeight: number,
  letterSpacing?: number
) => ({
  fontFamily: "inherit",
  fontWeight,
  fontSize: pxToRem(size),
  lineHeight: `${round(lineHeight / size)}`,
  ...(letterSpacing !== undefined
    ? { letterSpacing: `${round(letterSpacing / size)}em` }
    : {}),
});

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    default: string;
    paper: string;
    primary: string;
    header: string;
    playground: string;
    paperHover: string;
  }
  interface TypeText {
    primary: string;
    secondary: string;
    info: string;
    link: string;
    // active: string;
    // active2: string;
    // active3: string;
    // revoked: string;
    // jsonKey: string;
    // jsonValue: string;
    score: string;
    // error: string;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xsm: true;
    xxl: true;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    subtitle1: true;
    subtitle2: true;
    caption: false;
    body1: true;
    body2: true;
    small: true;
    button: true;
    score: true;
  }
}

export const themeOption: ThemeOptions = {
  typography: {
    h1: buildVariant(700, 20, 24.38),
    h2: buildVariant(700, 39, 25),
    body1: buildVariant(400, 16, 21),
    body2: buildVariant(400, 14, 20),
  },
  palette: {
    background: {
      default: "#030B10",
      paper: "#0D1921",
    },
    primary: {
      main: "#FFFFFF",
      dark: "#FFFFFF",
    },
    secondary: {
      main: "#97A8BC",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#97A8BC",
      info: "#E2EDFF",
      link: "#009FDB",
    },
  },
  breakpoints: {
    keys: ["xs", "xsm", "sm", "md", "lg", "xl", "xxl"],
    values: {
      xs: 0,
      xsm: 480,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1440,
      xxl: 1600,
    },
  },
  components: {
    MuiCssBaseline: cssBaseline,
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          ...buildVariant(600, 14, 20),
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#009FDB",
          color: "#FFFFFF",
          ":hover": {
            backgroundColor: "#0179A5",
          },
        },
        outlinedPrimary: {
          backgroundColor: "transparent",
          border: "1px solid #009FDB",
          color: "#009FDB",
          ":hover": {
            backgroundColor: "#081924",
            border: "1px solid #009FDB",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {},
      defaultProps: {
        PaperProps: {
          style: {
            borderRadius: "16px",
          },
        },
      },
    },
  },
};
