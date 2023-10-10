import Image from 'next/image'

const Header = ({
	dict
}: {
	dict: {
		heading: string
		subheading: string
	}
}) => {
	return (
		<header className="h-screen w-full flex flex-col md:flex-row items-center bg-[url('/hero.jpeg')] bg-no-repeat bg-center bg-cover">
			<div className='flex flex-col justify-center w-full md:w-2/3 text-center md:text-left h-full bg-black bg-opacity-50 py-6 px-6 sm:px-12 lg:px-24'>
				<h1 className='uppercase text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl'>
					{dict.heading}
				</h1>
				<p className='mt-4 text-lg lg:text-3xl font-semibold text-gray-300'>{dict.subheading}</p>
				<div className='relative md:hidden w-48 h-48 mx-auto'>
					<Image
						src='/logo_400x400.png'
						alt='fagusns021 logo big'
						fill
						sizes='(max-width: 640px) 100vw, 640px'
					/>
				</div>
			</div>
			<div className='relative hidden md:block md:w-48 md:h-48 lg:w-96 lg:h-96 mx-auto'>
				<Image
					src='/logo_400x400.png'
					alt='fagusns021 logo big'
					fill
					sizes='(max-width: 640px) 100vw, 640px'
				/>
			</div>
		</header>
	)
}

export default Header
