import { createSharedPathnamesNavigation } from "next-intl/navigation";
export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales }
);
export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
};
