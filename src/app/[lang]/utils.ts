import {
	HomeIcon,
	InformationCircleIcon,
	WrenchScrewdriverIcon,
	PhotoIcon,
	PhoneIcon
} from '@heroicons/react/24/outline'

export const links: { href: string; link: string; icon: any }[] = [
	{ href: '/', link: 'home', icon: HomeIcon },
	{ href: '#about', link: 'about', icon: InformationCircleIcon },
	{ href: '#what-we-do', link: 'whatWeDo', icon: WrenchScrewdriverIcon },
	{ href: '#our-work', link: 'ourWork', icon: PhotoIcon },
	{ href: '#contact', link: 'contact', icon: PhoneIcon }
]
