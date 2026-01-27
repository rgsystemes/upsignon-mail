const SUPPORTED_LOCALES = ['fr', 'en'];
const DEFAULT_LOCALE = 'fr';
const parseAcceptLanguage = (header) => {
    return header
        .split(',')
        .map((part) => {
        const [locale, quality] = part.trim().split(';q=');
        return {
            locale: locale.split('-')[0].toLowerCase(),
            quality: quality ? parseFloat(quality) : 1,
        };
    })
        .sort((a, b) => b.quality - a.quality);
};
export const getBestLanguage = (acceptLanguage) => {
    if (!acceptLanguage)
        return DEFAULT_LOCALE;
    const parsed = parseAcceptLanguage(acceptLanguage);
    for (const { locale } of parsed) {
        if (SUPPORTED_LOCALES.includes(locale)) {
            return locale;
        }
    }
    return DEFAULT_LOCALE;
};
