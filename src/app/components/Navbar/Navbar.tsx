import Container from "../Container";
import Account from "./Account";
import HostHome from "./HostHome";
import Language from "./Language";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
	return (
		<div 
			className='
				w-full
				h-20
				flex
				flex-row
				justify-between	
			'
		>
			<div className='basis-[281px]'>
				<Logo />
			</div>
			<Search/>
			<div
				className='
					flex
					flex-row	
					gap-2
					
				'	
			>
				<HostHome/>
				<Language/>
				<Account/>
			</div>

		</div>

	);
}
 
export default Navbar
