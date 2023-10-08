import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { Locale, i18n } from '../../i18n-config'
import Navbar from './layout/Navbar'
import { getDictionary } from '@/get-dictionary'

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default async function RootLayout({
	children,
	params: { lang }
}: {
	children: React.ReactNode
	params: { lang: Locale }
}) {
	const dict = await getDictionary(lang)
	return (
		<html lang={lang}>
			<body className={inter.className}>
				<Navbar dict={dict} />
				{children}
			</body>
		</html>
	)
}
