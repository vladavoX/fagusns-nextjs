'use client'
import Link from 'next/link'
import Image from 'next/image'
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
		<ul className='flex items-center gap-2 text-base'>
			{locales.map(locale => (
				<li key={locale}>
					<Link href={redirectedPathName(locale)}>
						<span className={`rounded-sm fi fi-${locale === 'sr' ? 'rs' : locale === 'en' ? 'gb' : locale}`}></span>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default LocaleSwitcher
