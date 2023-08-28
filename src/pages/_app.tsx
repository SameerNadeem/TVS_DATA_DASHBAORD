import React from "react";
import {
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material";
import { SessionProvider } from "next-auth/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/Header";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = ({
  Component, pageProps: { session, ...pageProps },
}:AppProps) => {
    const [mode, setMode] = React.useState<"light" | "dark">("dark");
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
      }),
      [mode],
    );

    const darkThemeChosen = React.useMemo(
      () =>
        createTheme({
          ...darkTheme,
        }),
        [mode],
    );
    const lightThemeChosen = React.useMemo(
      () =>
        createTheme({
          ...lightTheme,
        }),
      [],
    );
    
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen: lightThemeChosen}>
        <SessionProvider session={session}>
          <CssBaseline />
          <Header ColorModeContext={ColorModeContext}/>
          <Layout>
          <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
