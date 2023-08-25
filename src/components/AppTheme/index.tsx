import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import React, { useMemo } from "react";
import { themeOption } from "../../theme/theme";

type Props = {
  children: React.ReactNode;
};
export default function AppTheme({ children }: Props) {
  const theme = useMemo(() => {
    const res_theme = responsiveFontSizes(createTheme(themeOption), {
      breakpoints: ["sm", "md", "lg"],
      factor: 1.5,
    });
    return res_theme;
  }, []);
  return (
    <ThemeProvider theme={createTheme(theme)}>
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
}
