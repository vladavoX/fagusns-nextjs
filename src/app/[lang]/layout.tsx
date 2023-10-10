import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }))
}

const inter = Inter({ subsets: ['latin'] })

const serbianMetadata: Metadata = {
	title: 'FAGUS NS-021 - Zanatstvo u dizajnu nameštaja',
	description:
		'Doživite najfinije u zanatskom izradi nameštaja u FAGUS NS-021. Specializujemo se za kreiranje nameštaja vrhunskog kvaliteta koristeći ivericu, šperploču, masivno drvo i gvožđe, spajajući modernu estetiku sa trajnošću. Besplatna usluga transporta dostupna.',
	keywords:
		'drvena obrada, nameštaj visokog kvaliteta, nameštaj od iverice, nameštaj od šperploče, nameštaj od masivnog drveta, dizajn od gvožđa, zanatstvo u izradi nameštaja',
	viewport: 'width=device-width, initial-scale=1.0',
	robots: 'index, follow',
	metadataBase: new URL('https://www.fagusns.com/'),
	openGraph: {
		title: 'FAGUS NS-021 - Izvanredne drvorezbarske kreacije',
		description:
			'Doživite najfinije u zanatskom izradi nameštaja u FAGUS NS-021. Specializujemo se za kreiranje nameštaja vrhunskog kvaliteta koristeći ivericu, šperploču, masivno drvo i gvožđe, spajajući modernu estetiku sa trajnošću. Besplatna usluga transporta dostupna.',
		type: 'website',
		locale: 'sr_RS',
		url: 'https://www.fagusns.com/',
		siteName: 'FAGUS NS-021',
		images: [
			{
				url: 'https://www.fagusns.com/images/logo.svg',
				width: 800,
				height: 600,
				alt: 'FAGUS NS-021 Logo'
			}
		]
	}
}

const englishMetadata: Metadata = {
	title: 'FAGUS NS-021 - Craftsmanship in Furniture Design',
	description:
		'Experience the finest in furniture craftsmanship at FAGUS NS-021. We specialize in creating top-quality furniture using chipboard, plywood, solid wood, and iron, combining modern aesthetics with durability. Free transportation service available.',
	keywords:
		'woodworking, high-quality furniture, chipboard furniture, plywood furniture, solid wood furniture, iron designs, furniture craftsmanship',
	viewport: 'width=device-width, initial-scale=1.0',
	robots: 'index, follow',
	metadataBase: new URL('https://www.fagusns.com/'),
	openGraph: {
		title: 'FAGUS NS-021 - Exquisite Woodworking Creations',
		description:
			'Experience the finest in furniture craftsmanship at FAGUS NS-021. We specialize in creating top-quality furniture using chipboard, plywood, solid wood, and iron, combining modern aesthetics with durability. Free transportation service available.',
		type: 'website',
		locale: 'en_IE',
		url: 'https://www.fagusns.com/',
		siteName: 'FAGUS NS-021',
		images: [
			{
				url: 'https://www.fagusns.com/images/logo.svg',
				width: 800,
				height: 600,
				alt: 'FAGUS NS-021 Logo'
			}
		]
	}
}

const russianMetadata: Metadata = {
	title: 'FAGUS NS-021 - Мастерство в дизайне мебели',
	description:
		'Познакомьтесь с лучшим в мастерстве изготовления мебели в FAGUS NS-021. Мы специализируемся на создании мебели высочайшего качества с использованием ДСП, фанеры, массива и железа, сочетая современную эстетику с надежностью. Бесплатная услуга транспортировки доступна.',
	keywords:
		'обработка дерева, мебель высокого качества, мебель из ДСП, мебель из фанеры, мебель из массива, дизайн из железа, мастерство в изготовлении мебели',
	viewport: 'width=device-width, initial-scale=1.0',
	robots: 'index, follow',
	metadataBase: new URL('https://www.fagusns.com/'),
	openGraph: {
		title: 'FAGUS NS-021 - Изысканные деревянные изделия',
		description:
			'Познакомьтесь с лучшим в мастерстве изготовления мебели в FAGUS NS-021. Мы специализируемся на создании мебели высочайшего качества с использованием ДСП, фанеры, массива и железа, сочетая современную эстетику с надежностью. Бесплатная услуга транспортировки доступна.',
		type: 'website',
		locale: 'ru_RU',
		url: 'https://www.fagusns.com/',
		siteName: 'FAGUS NS-021',
		images: [
			{
				url: 'https://www.fagusns.com/images/logo.svg',
				width: 800,
				height: 600,
				alt: 'FAGUS NS-021 Логотип'
			}
		]
	}
}

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
	return lang === 'sr' ? serbianMetadata : lang === 'en' ? englishMetadata : russianMetadata
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
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
