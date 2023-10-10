const Contact = ({
	dict
}: {
	dict: { heading: string; subheading: string; user_one: string; user_two: string; email: string }
}) => {
	return (
		<section
			id='contact'
			className='w-full p-6 sm:p-12 lg:p-24 bg-gray-100 space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col justify-center'
		>
			<div className='sm:text-center'>
				<h2 className='text-2xl font-semibold tracking-tight text-black sm:text-3xl lg:text-5xl'>{dict.heading}</h2>
				<h3 className='text-base sm:text-lg lg:text-2xl text-gray-700'>{dict.subheading}</h3>
			</div>
			<div className='text-gray-600 text-sm sm:text-base lg:text-lg sm:flex justify-evenly'>
				<p className='flex sm:flex-col items-center justify-between'>
					<span className='text-gray-900 font-medium'>{dict.user_one}</span> +381 65 920 75 42
				</p>
				<p className='flex sm:flex-col items-center justify-between'>
					<span className='text-gray-900 font-medium'>{dict.user_two}</span> +381 64 221 64 25
				</p>
				<p className='flex sm:flex-col items-center justify-between'>
					<span className='text-gray-900 font-medium'>{dict.email}</span> fagusns021@gmail.com
				</p>
			</div>
		</section>
	)
}

export default Contact
