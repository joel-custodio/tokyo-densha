import Head from "next/head";
import PageContainer from "../src/components/PageContainer";
import LanguageProvider from "../src/providers/LanguageProvider";
import { appWithTranslation } from "next-i18next";

require("../styles/global.css");

const Home = () => {
  return (
    <>
      <Head>
        <title>東京電車</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LanguageProvider>
        <PageContainer />
      </LanguageProvider>
    </>
  );
}

export default appWithTranslation(Home);
