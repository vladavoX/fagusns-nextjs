const Header = ({
	dict
}: {
	dict: {
		heading: string
		subheading: string
	}
}) => {
	return (
		<header className="h-screen w-full flex items-center bg-[url('/hero.jpeg')] bg-no-repeat bg-center bg-cover">
			<div className='flex flex-col justify-center w-full sm:w-2/3 text-center sm:text-left h-full bg-black bg-opacity-50 p-6 sm:p-24'>
				<h1 className='uppercase text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl'>
					{dict.heading}
				</h1>
				<p className='mt-4 text-lg lg:text-3xl font-semibold text-gray-300'>{dict.subheading}</p>
			</div>
		</header>
	)
}

export default Header
