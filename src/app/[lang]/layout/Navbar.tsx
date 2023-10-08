import DesktopNav from '../components/navbar/DesktopNav'
import MobileNav from '../components/navbar/MobileNav'

const Navbar = async ({ dict }: { dict: { navbar: any } }) => {
	return (
		<>
			<DesktopNav dict={dict} />
			<MobileNav dict={dict} />
		</>
	)
}

export default Navbar
