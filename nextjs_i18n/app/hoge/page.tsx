import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../_components/LocaleSwitcher";
export default function HogePage() {
  const t = useTranslations("Header");
  const locale = useLocale() as "ja" | "en";
  return (
    <main className="p-8">
      <LocaleSwitcher locale={locale} />
      <section>
        <h1 className="text-xl mt-4">{t("appTitle")}</h1>
        <p className="mt-2">{t("newsDescription")}</p>
      </section>
    </main>
  );
}
