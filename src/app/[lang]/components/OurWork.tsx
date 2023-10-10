import Image from 'next/image'

const OurWork = ({
	dict
}: {
	dict: {
		heading: string
		subheading: string
		closet: string
		closetDesc: string
		kitchen: string
		kitchenDesc: string
		livingRoom: string
		livingRoomDesc: string
	}
}) => {
	return (
		<section
			id='our-work'
			className='min-h-screen w-full p-6 sm:p-12 lg:p-24 bg-gray-900 space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col justify-center'
		>
			<div>
				<h2 className='text-2xl font-semibold tracking-tight text-gray-100 sm:text-3xl lg:text-5xl'>{dict.heading}</h2>
				<h3 className='text-base sm:text-lg lg:text-2xl text-gray-400'>{dict.subheading}</h3>
			</div>
			<ul className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
				<li>
					<div className='relative w-full h-96 mb-4'>
						<Image
							className='object-cover rounded-lg'
							src='/our-work/project-1.jpg'
							alt=''
							fill
							sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
						/>
					</div>
					<div className='flex flex-col gap-2 mt-2'>
						<h4 className='text-base md:text-lg lg:text-2xl text-gray-300'>{dict.closet}</h4>
						<p className='text-sm md:text-base text-gray-400'>{dict.closetDesc}</p>
					</div>
				</li>
				<li>
					<div className='relative w-full h-96 mb-4'>
						<Image
							className='object-cover rounded-lg'
							src='/our-work/project-2.jpg'
							alt=''
							fill
							sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
						/>
					</div>
					<div className='flex flex-col gap-2 mt-2'>
						<h4 className='text-base md:text-lg lg:text-2xl text-gray-300'>{dict.livingRoom}</h4>
						<p className='text-sm md:text-base text-gray-400'>{dict.livingRoomDesc}</p>
					</div>
				</li>
				<li>
					<div className='relative w-full h-96 mb-4'>
						<Image
							className='object-cover rounded-lg'
							src='/our-work/project-3.jpg'
							alt=''
							fill
							sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
						/>
					</div>
					<div className='flex flex-col gap-2 mt-2'>
						<h4 className='text-base md:text-lg lg:text-2xl text-gray-300'>{dict.kitchen}</h4>
						<p className='text-sm md:text-base text-gray-400'>{dict.kitchenDesc}</p>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default OurWork
