export type Locale = (typeof locales)[number];

export const locales = ["it", "en"] as const;
export const defaultLocale: Locale = "it";
