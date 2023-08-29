import { ThemeOptions } from "@mui/material";
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
        score: string;
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
export declare const themeOption: ThemeOptions;
