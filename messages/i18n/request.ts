import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "lib/locale";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = await getUserLocale();
  console.log(locale);

  return {
    locale,
    messages: (await import(`@/components/../messages/${locale}.json`)).default,
  };
});
