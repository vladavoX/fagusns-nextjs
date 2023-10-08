import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import Header from './components/Header'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
	const dict = await getDictionary(lang)
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Header dict={dict.header} />
		</main>
	)
}
