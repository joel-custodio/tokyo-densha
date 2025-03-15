import React from "react";
import loadAllTranslations from "../src/config/loadAllTranslations";

export async function getServerSideProps({ req, locale }) {
  return {
    props: {
      ...(await loadAllTranslations(req, locale)),
    },
  };
}

export default function Index() {
  return <div style={{ flex: "1 1 auto" }}></div>;
}