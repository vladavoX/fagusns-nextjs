import Link from 'next/link'
import Image from 'next/image'

import LocaleSwitcher from './LocaleSwitcher'
import { links } from '../../utils'

const DesktopNav = ({ dict }: { dict: { navbar: any } }) => {
	return (
		<nav className='z-50 hidden sm:flex fixed w-full bg-gray-800 items-center justify-between py-6 sm:px-6 lg:px-8'>
			<Link href='/'>
				<Image
					priority={true}
					className='w-auto h-auto'
					src='/logo.svg'
					alt='FagusNS021 logo image'
					width={80}
					height={32}
				/>
			</Link>
			<ul className='flex md:gap-4'>
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

export default DesktopNav
