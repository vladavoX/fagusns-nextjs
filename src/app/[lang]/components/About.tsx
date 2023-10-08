const About = ({ dict }: { dict: { paragraphFirst: string; paragraphSecond: string } }) => {
	return (
		<section
			id='about'
			className='min-h-screen w-full flex flex-col gap-4 justify-center items-center text-center text-lg lg:text-3xl font-semibold text-gray-300 p-6 sm:p-24 bg-gray-900'
		>
			<p>{dict.paragraphFirst}</p>
			<p>{dict.paragraphSecond}</p>
		</section>
	)
}

export default About
