import Head from "next/head";
import PageContainer from "../src/components/PageContainer";
import LanguageProvider from "../src/providers/LanguageProvider";
import './i18n';

require("../styles/global.css");

export default function Home() {
  return (
    <div>
      <Head>
        <title>東京電車</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LanguageProvider>
        <PageContainer />
      </LanguageProvider>
    </div>
  );
}
