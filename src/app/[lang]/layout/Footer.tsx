import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='bg-gray-900 w-full flex flex-col items-center justify-center p-6'>
			<Image
				src='/logo_400x400.png'
				alt='fagusns021 logo big'
				width={200}
				height={200}
				className='mx-auto'
			/>
			<div className='border-t border-t-gray-700 w-full text-center mt-6 pt-6 text-xs sm:text-sm text-gray-300 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4'>
				<Image
					src='/logo.svg'
					alt='fagusns logo'
					width={80}
					height={32}
					className='w-auto h-auto'
				/>
				<p>Copyright © 2022-2023 FagusNS021. All rights reserved.</p>
				<p>Website made by Vladimir Aleksic</p>
			</div>
		</footer>
	)
}

export default Footer
