'use client'

import {BiSearch} from 'react-icons/bi' 
import { useAppDispatch ,useAppSelector} from '@/app/hook/hookRedux';
import { setExpandSearch } from '@/app/redux/reducer/SearchSlide';
import clsx from 'clsx';
import { useState } from 'react';
import Stays from './Stays';
import Experiences from './Experiences';
import WhereInput from './InputCheckIn';
import InputWhere from './InputWhere';
import InputGuests from './InputGuests';
import DetailRegion from './DetailRegion';
import DatePicker from './DatePicker';

const Search = () => {

	const dispatch = useAppDispatch()
	const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)	

	const handleShowWhere=()=>{

	}
	
	type SelectDay='Stays'|'Experiences';
	const[selectDay,setSelectDay] = useState<SelectDay>('Stays')
	
	const handSelectStays=()=>{
		setSelectDay('Stays')
	}
	
	const handleSelectExperiences=()=>{
		setSelectDay('Experiences')
	}

	const handleExpandSearch = ()=>{
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
				${isExpandSearch?'top-20 scale-150 invisible ':''}	
				duration-75
				transition-transform
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
						transition-transform
						duration-150
						${isExpandSearch?'top-[-40px] h-16 visible scale-150':'top-[-30px] invisible'}	
					
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
							<button 
								onClick={handSelectStays}
								type='button'
								className='
									hover:underline-offset-[6px]
									hover:underline
								'>
								Stays
							</button>
							<button
								onClick={handleSelectExperiences}
								type='button'
								className='
									hover:underline-offset-[6px]
									hover:underline
								'
							>
								Experiences
							</button>
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
							<InputWhere/>
							{ selectDay==='Stays'?<Stays/>:<Experiences/>}	
							<InputGuests/>
						</div>	
					<DatePicker/>
				</form>
			<button className='my-auto px-4 text-[#222222] font-semibold'>Any Where</button>
			<button className='my-auto px-4 text-[#222222] font-semibold'>Any Week</button>
			<div className='flex flex-row'>
				<button className='my-auto px-4 text-[#717171] font-semibold' >
					Add Guests
				</button>
				<button
					onClick={handleExpandSearch}
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