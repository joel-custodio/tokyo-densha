import path from "path";
import fs from "fs";
import { i18n } from "next-i18next";
import { isNil as _isNil } from "lodash";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default async function loadAllTranslations(req, locale) {
  // Auto-reload i18n in development mode.
  if (process.env.NODE_ENV === "development" && !_isNil(i18n)) {
    await i18n.reloadResources();
  }

  // Find all translation namespaces in the project
  const translationDirectory = path.join(process.cwd(), "public/locales/en");
  const translationFiles = fs.readdirSync(translationDirectory);
  const translationNamespaces = translationFiles.map((fileName) =>
    fileName.replace(".json", "")
  );

  // Use NEXT_LOCALE if available
  const localeToUse = req?.cookies?.NEXT_LOCALE || locale;

  // Local translation data based on locale
  const translationData = await serverSideTranslations(
    localeToUse,
    translationNamespaces
  );

  return translationData;
}
