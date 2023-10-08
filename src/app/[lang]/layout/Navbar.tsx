import Image from 'next/image'
import Link from 'next/link'
import LocaleSwitcher from '../components/LocaleSwitcher'

const links: { href: string; link: string }[] = [
	{ href: '/', link: 'home' },
	{ href: '/#about', link: 'about' },
	{ href: '/#what-we-do', link: 'whatWeDo' },
	{ href: '/#ourWork', link: 'ourWork' },
	{ href: '/#contact', link: 'contact' }
]

const Navbar = async ({ dict }: { dict: { navbar: any } }) => {
	return (
		<nav className='bg-gray-800 flex items-center justify-between py-6 px-2 sm:px-6 lg:px-8'>
			<Link href='/'>
				<Image
					className='w-auto h-auto'
					src='/logo.svg'
					alt='FagusNS021 logo image'
					width={80}
					height={32}
				/>
			</Link>
			<ul className='flex'>
				{links.map(({ href, link }) => (
					<li key={link}>
						<Link
							className='text-gray-300 hover:bg-gray-900 hover:text-white duration-150 rounded-md px-3 py-2 text-sm font-medium'
							href={href}
						>
							{dict.navbar[link]}
						</Link>
					</li>
				))}
			</ul>
			<LocaleSwitcher />
		</nav>
	)
}

export default Navbar
