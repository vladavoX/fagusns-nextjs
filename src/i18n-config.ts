export const i18n = {
	defaultLocale: 'sr',
	locales: ['sr', 'en', 'ru']
} as const

export type Locale = (typeof i18n)['locales'][number]
