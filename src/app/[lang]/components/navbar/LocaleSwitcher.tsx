'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '/node_modules/flag-icons/css/flag-icons.min.css'

import { i18n } from '@/i18n-config'

const LocaleSwitcher = () => {
	const pathName = usePathname()
	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/'
		const segments = pathName.split('/')
		segments[1] = locale
		return segments.join('/')
	}

	const currentLocale = pathName.split('/')[1]
	const locales = i18n.locales.filter(locale => locale !== currentLocale)

	return (
		<ul className='flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-2 border-t border-t-gray-700 sm:border-none pt-4 sm:p-0'>
			{locales.map(locale => (
				<li key={locale}>
					<Link
						href={redirectedPathName(locale)}
						className='flex gap-2 text-gray-300 px-3 sm:px-0 py-2 sm:py-0'
					>
						<span className={`rounded-sm fi fi-${locale === 'sr' ? 'rs' : locale === 'en' ? 'gb' : locale}`}></span>
						<span className='sm:hidden'>{locale === 'sr' ? 'Srpski' : locale === 'en' ? 'English' : 'Русский'}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default LocaleSwitcher
