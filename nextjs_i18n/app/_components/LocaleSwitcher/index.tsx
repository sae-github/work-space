"use client";

import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import { CookieSerializeOptions, parse, serialize } from "cookie";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;
    document.cookie = serialize("NEXT_LOCALE", newLocale);
    router.replace(pathname);
    router.refresh();
  };

  return (
    <div>
      <select value={locale} onChange={changeLocale} className="...">
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
