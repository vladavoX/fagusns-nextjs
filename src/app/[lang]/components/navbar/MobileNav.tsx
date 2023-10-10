'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LocaleSwitcher from './LocaleSwitcher'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { links } from '../../utils'

const MobileNav = ({ dict }: { dict: { navbar: any } }) => {
	const [showLinks, setShowLinks] = useState<boolean>(false)

	return (
		<nav
			className={`z-50 bg-gray-800 flex flex-col sm:hidden fixed w-full py-6 px-6 ${showLinks ? 'h-screen' : 'h-auto'}`}
		>
			<div className='flex items-center justify-between'>
				<Link
					href='/'
					className='text-center'
				>
					<Image
						priority={true}
						className='w-auto h-auto'
						src='/logo.svg'
						alt='FagusNS021 logo image'
						width={80}
						height={32}
					/>
				</Link>
				<div>
					{showLinks ? (
						<XMarkIcon
							className='absolute top-5 right-6 z-20 h-6 w-6 text-gray-300 cursor-pointer'
							onClick={() => setShowLinks(!showLinks)}
						/>
					) : (
						<Bars3Icon
							className='absolute top-5 right-6 z-20 h-6 w-6 text-gray-300 cursor-pointer'
							onClick={() => setShowLinks(!showLinks)}
						/>
					)}
				</div>
			</div>
			{showLinks && (
				<>
					<div className='h-full flex flex-col justify-between'>
						<ul className='flex flex-col py-4 mt-6 border-t border-t-gray-700'>
							{links.map(link => (
								<li key={link.link}>
									<Link
										className='w-fit flex items-center gap-2 text-gray-300 hover:bg-gray-900 hover:text-white duration-150 rounded-md px-3 py-2'
										href={link.href}
										onClick={() => setShowLinks(!showLinks)}
									>
										<link.icon className='h-6 w-6' />
										{dict.navbar[link.link]}
									</Link>
								</li>
							))}
						</ul>
						<LocaleSwitcher />
					</div>
					<div className='z-10 w-32 h-screen bg-gray-900 fixed right-0 top-0 rounded-l-3xl'></div>
				</>
			)}
		</nav>
	)
}

export default MobileNav
