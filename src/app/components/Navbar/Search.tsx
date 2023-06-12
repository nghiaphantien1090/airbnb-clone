'use client'

import {BiSearch} from 'react-icons/bi' 
import { useAppDispatch ,useAppSelector} from '@/app/hook/hookRedux';
import { setExpandSearch } from '@/app/redux/reducer/SearchSlide';
import clsx from 'clsx';

const Search = () => {

	const dispatch = useAppDispatch()
	const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)	

	const handleToogle = ()=>{
		dispatch(setExpandSearch())
		console.log(isExpandSearch)
	}
	
	return (
	<div className='relative px-6 my-auto'>
		<div
			className={clsx( `
				relative	
			 	my-auto
				h-12
				flex
				flex-row
				rounded-full	
				border-gray-200
				border-[1px]
				bg-white
				hover:shadow-md
				${isExpandSearch?'top-20 scale-150 invisible':''}	
				transition-all
			`
			)}
		>
			<form 
				className={clsx(`
					absolute
					flex
					flex-col
					w-full
					h-auto
					p-1
					transition-all
					${isExpandSearch?'top-[-24px] h-16 visible scale-150':'top-[-30px] invisible'}	
				
				`)}
				>
					<div className='
						p-2
				 	 	flex
						flex-row
						justify-between
						w-1/2
						mx-auto
						text-slate-600
						text-[7px]
						font-normal
					'>
						<button className='
							hover:underline-offset-[6px]
							hover:underline
							
						'>Stays</button>
						<button>Experiences</button>
						<a className='my-auto'>Online Experiences</a>
					</div>
					<div className='
				 		w-full
						rounded-full
						bg-white
						flex
						border-solid
						border-[0.5px]

					'>
						<div className='
							text-[6px]
							hover:rounded-full
							px-4
							py-[0.5px]
							cursor-pointer
						 	hover:bg-slate-100	 
							flex
							flex-col
							justify-center
							hover:
						'>
							<label
								className='block font-semibold text-slate-600'	
							>
								Where
							</label>
							<input
							 	type='text'
								className='block  caret-slate-800'
								placeholder='Search destinations'
							>
							</input>

						</div>
						<div className='
							text-[6px]
							hover:rounded-full
							py-1
							px-4
							cursor-pointer
							hover:bg-slate-100	
							flex
							flex-col
							justify-center

						'>
							<label
								className='block font-semibold text-slate-600'	
							>
								Chekin
							</label>
							<div
								className='block w-auto  '
							>
								Add date
							</div>

						</div>
						<div className='
							text-[6px]
							hover:rounded-full
							px-4
							py-1
							cursor-pointer
							w-auto
							hover:bg-slate-100
							flex
							flex-col
							justify-center

						'>
							<label
								className='block font-semibold text-slate-600'	
							>
							Check out	
							</label>
							<div
								className='block  '
							>
								Add date
							</div>

						</div>
						<div className='
							text-[6px]
							hover:rounded-full
							py-1
							px-1
							pl-2
							cursor-pointer
						 	hover:bg-slate-100	 
							flex-grow
							flex
							justify-between
							
							
						'>
							<div className='flex flex-col justify-center'>
								<label
									className='block font-semibold text-slate-600'
								>
									Who
								</label>
								<div
									className='block  caret-current'
								>
									Add Guests
								</div>
							</div>
							<button
								type='button'
								onClick={handleToogle}
								className='
									my-auto
									rounded-full
									bg-[#ff385c]	
									p-2
								
								'
							>
								<BiSearch fill=' white' size={8} />
							</button>
						</div>
					</div>	


			</form>
			<button className='my-auto px-4 text-[#222222] font-semibold'>Any Where</button>
			<button className='my-auto px-4 text-[#222222] font-semibold'>Any Week</button>
			<div className='flex flex-row'>
				<button className='my-auto px-4 text-[#717171] font-semibold' >
					Add Guests
				</button>
				<button
					onClick={handleToogle}
					className='
						w-8
						h-8
						my-auto
						rounded-full
						bg-[#ff385c]	
						mr-2
						p-2
					'
					>
					<BiSearch fill=' white' />		
				</button>
			</div>
		</div>

	</div>
	);
}
 
export default Search;