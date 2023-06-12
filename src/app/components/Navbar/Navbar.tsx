import clsx from "clsx";
import Container from "../Container";
import Account from "./Account";
import HostHome from "./HostHome";
import Language from "./Language";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
	return (
		<div>
			<div
				className='
					fixed
					bg-[#00000040]
					w-screen
					h-screen
				'>
			</div>
			<div
				className={clsx(`
					relative
					bg-white
					pb-20
				`)}>
				<div
					className='
				
				w-full
				z-50
				h-20
				flex
				flex-row
				justify-between	
			'
				>
					<div className='basis-[281px]'>
						<Logo />
					</div>
					<Search />
					<div
						className='
					flex
					flex-row	
					gap-2
					
				'
					>
						<HostHome />
						<Language />
						<Account />
					</div>

				</div>
			</div>

		</div>
	);
}

export default Navbar
