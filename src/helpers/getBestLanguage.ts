import type { Locales } from '../templates/index.js'

const SUPPORTED_LOCALES: Locales[] = ['fr', 'en']
const DEFAULT_LOCALE: Locales = 'fr'

type ParsedLanguage = {
  locale: string
  quality: number
}

const parseAcceptLanguage = (header: string): ParsedLanguage[] => {
  return header
    .split(',')
    .map((part) => {
      const [locale, quality] = part.trim().split(';q=')
      return {
        locale: locale.split('-')[0].toLowerCase(),
        quality: quality ? parseFloat(quality) : 1,
      }
    })
    .sort((a, b) => b.quality - a.quality)
}

export const getBestLanguage = (acceptLanguage?: string | null): Locales => {
  if (!acceptLanguage) return DEFAULT_LOCALE

  const parsed = parseAcceptLanguage(acceptLanguage)

  for (const { locale } of parsed) {
    if (SUPPORTED_LOCALES.includes(locale as Locales)) {
      return locale as Locales
    }
  }

  return DEFAULT_LOCALE
}
