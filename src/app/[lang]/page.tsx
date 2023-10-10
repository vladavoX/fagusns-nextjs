import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Header from './components/Header'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import OurWork from './components/OurWork'
import Contact from './components/Contact'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const dict = await getDictionary(lang)

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Header dict={dict.header} />
			<About dict={dict.about} />
			<WhatWeDo dict={dict.whatWeDo} />
			<OurWork dict={dict.ourWork} />
			<Contact dict={dict.contact} />
		</main>
	)
}
