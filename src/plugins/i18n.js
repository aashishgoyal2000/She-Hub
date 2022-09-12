import { createI18n } from "vue-i18n";
import enJson from "@/locale/en.json";
import hiJson from "@/locale/hi.json";

const messages = {
  en: enJson,
  hi: hiJson,
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
});

export default i18n;
