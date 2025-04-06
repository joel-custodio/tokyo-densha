import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";
import PageContainer from "../src/components/PageContainer";
import LanguageProvider from "../src/providers/LanguageProvider";
import { appWithTranslation } from "next-i18next";
import StationProvider from "../src/providers/StationProvider";
import { createTheme } from "@mui/material/styles";
import theme from "../styles/theme";

require("../styles/global.css");

const Home = () => {
  const defaultTheme = createTheme(theme);
  return (
    <>
      <Head>
        <title>東京電車</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <LanguageProvider>
          <StationProvider>
            <PageContainer />
          </StationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(Home);
