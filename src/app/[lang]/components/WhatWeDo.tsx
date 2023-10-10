import Image from 'next/image'
import Link from 'next/link'

const links = [
	{ href: '/kitchen', label: 'Kitchen', src: '/kitchen.jpeg' },
	{ href: '/bedroom', label: 'Bedroom', src: '/bedroom.jpeg' },
	{ href: '/bathroon', label: 'Bathroom', src: '/bathroom.jpeg' },
	{ href: '/closet', label: 'Closet', src: '/closet.jpg' },
	{ href: '/living-room', label: 'Living Room', src: '/living-room.jpeg' },
	{ href: '/office', label: 'Office', src: '/office.jpeg' }
]

const WhatWeDo = ({ dict }: { dict: any }) => {
	return (
		<section
			id='what-we-do'
			className='min-h-screen w-full p-6 sm:p-12 lg:p-24 bg-gray-100 space-y-4 sm:space-y-6 lg:space-y-8'
		>
			<h2 className='text-2xl font-semibold tracking-tight text-black sm:text-3xl lg:text-5xl'>{dict.heading}</h2>
			<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4'>
				{links.map(link => (
					<Link
						key={link.label}
						href={link.href}
					>
						<li className='relative w-full h-96 group'>
							<Image
								className='z-30 object-cover rounded-lg shadow'
								src={link.src}
								alt={link.label}
								fill={true}
								sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
							/>
							<p className='absolute bottom-0 left-0 w-full h-16 group-hover:h-full duration-150 bg-black bg-opacity-75 z-40 rounded-lg flex justify-center items-center text-sm font-medium text-gray-300 group-hover:text-white'>
								{dict[link.label]}
							</p>
						</li>
					</Link>
				))}
			</ul>
		</section>
	)
}

export default WhatWeDo
