"use client";

import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import { CookieSerializeOptions, parse, serialize } from 'cookie'

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  // `pathname` will contain the current
  // route without the locale e.g. `/about`...
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;
    document.cookie = serialize("NEXT_LOCALE", newLocale);
    // const cookieStore = cookies();
    // const locale = cookieStore.set("NEXT_LOCALE", newLocale)
    // ...if the user chose Arabic ("ar-eg"),
    // router.replace() will prefix the pathname
    // with this `newLocale`, effectively changing
    // languages by navigating to `/ar-eg/about`.

    router.replace(pathname);
    router.refresh()
    
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
