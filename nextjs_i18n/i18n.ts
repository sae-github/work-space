import { NextIntlClientProvider } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value as
    | "ja"
    | "en"
    | undefined;
  if (!locale) {
    return notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
