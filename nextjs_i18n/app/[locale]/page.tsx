import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../_components/LocaleSwitcher";

export default function LocalePage() {
  const t = useTranslations("Header");
  const locale = useLocale() as Locale;
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
