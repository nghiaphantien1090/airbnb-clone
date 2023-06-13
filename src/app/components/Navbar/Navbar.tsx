import clsx from "clsx";
import Account from "./Account";
import HostHome from "./HostHome";
import Language from "./Language";
import Logo from "./Logo";
import Search from "./Search";
import { useAppSelector } from "@/app/hook/hookRedux";

const Navbar = () => {

	const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)

	return (
		<div>
			<div
				className={clsx(
					`fixed
					top-0
					right-0
					bg-[#00000040]
					w-screen
					h-screen
					opacity-75
					${isExpandSearch?'visible':'invisible'}
					`
				)}
				>
			</div>
			<div
				className={clsx(`
					md:px-10
					px-5
					fixed
					top-0
					right-0
					w-screen
					bg-white
					transition-transform
				    border-b-[1px]
					border-b-slate-200
					${isExpandSearch?'pb-20':'pb-0'}
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
