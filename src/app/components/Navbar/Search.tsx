'use client'

import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';

import { useAppDispatch ,useAppSelector} from '@/app/hook/hookRedux';
import { setExpandSearch } from '@/app/redux/reducer/SearchSlide';

import {useSelectTab} from '../../hook/hook'

import Stays from './Stays';
import Experiences from './Experiences';
import InputWhere from './InputWhere';
import InputGuests from './InputGuests';
import ToogleSearch from './ToogleSearch';
import ShownTab from './SelectedTab/ShownTab';
import Button from './Button';
import ExpandButton from './ExpandButton';

const Search = () => {

	const dispatch = useAppDispatch()
	const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)	
	
	type SelectDay='Stays'|'Experiences';
	const[selectDay,setSelectDay] = useState<SelectDay>('Stays')
	
	const handSelectStays=()=>{
		setSelectDay('Stays')
	}
	
	const handleSelectExperiences=()=>{
		setSelectDay('Experiences')
	}

	const {selectTab}= useSelectTab()

	const handleExpandSearch = useCallback(() => {
		dispatch(setExpandSearch())
		selectTab({ selectingTab: undefined })
	}, [dispatch,selectTab]) 
	
	const handleExpandDes=useCallback(()=>{
		dispatch(setExpandSearch())
		selectTab({selectingTab:'destinationTab'})
	},[selectTab,dispatch])

	const bookingState = useAppSelector(state=>state.booking)
	const checkIn = bookingState.checkInDate
	const checkOut = bookingState.checkOutDate
	const handleExpandDate=useCallback(()=>{
		if(!checkIn)
		{
			dispatch(setExpandSearch())
			selectTab({selectingTab:'checkInTab'})
			return
		}
		if(!checkOut)
		{
			dispatch(setExpandSearch())
			selectTab({selectingTab:'checkOutTab'})
			return
		}
			dispatch(setExpandSearch())
			selectTab({selectingTab:'checkInTab'})

	},[selectTab,dispatch,checkIn,checkOut])

	const rangeDateBooking = checkIn&&checkOut?`${checkIn}-${checkOut}`:undefined 

	const guestLiting  = bookingState.guestListing

	const selectedTab=useAppSelector(state=>state.selectTabSearch.selectingTab)

	const handleExpandGuest = useCallback(()=>{
		dispatch(setExpandSearch())
		selectTab({selectingTab:'addGuestTab'})
	},[dispatch,selectTab])

	const totalGuest = Object.values(guestLiting).reduce((a,b)=>a+b)
	
	return (
		<div className='relative px-6 my-auto'>
			<div
				className={clsx(`
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
				duration-75
				transition-transform
				${isExpandSearch ? 'top-20 scale-[1.2] invisible ' : ''}	
				${selectedTab !== undefined ? 'shadow-2xl' : ''}
			`
				)}
			>
				<div className=''>
					<form
						className={clsx(`
						absolute
						top-[-70px]
						-left-1/2
						flex
						flex-col
						h-auto
						transition-transform
						duration-150
						${isExpandSearch ?
								'top-[-50px] -left-1/2 visible w-[200%] h-[150%]'
								: 'top-[-30px]  invisible'}	
					`)}
					>
						<div className='
							p-4
							flex
							flex-row
							justify-between
							w-1/2
							mx-auto
							text-slate-600
							text-[14px]
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
						<div className={clsx(
							`w-full
							rounded-full
							flex
							flex-row
							border-solid
							border-[0.5px]
							${selectedTab !== undefined ? 'shadow-2xl bg-slate-200' : ''}
							`
						)}
						>
							<InputWhere

								selectedInputTab={{ selectingTab: 'destinationTab' }}
							/>
							<div className='flex-grow flex '>
								<div className='flex-grow h-full'>
									{selectDay === 'Stays' ?
										<Stays /> : <Experiences />}
								</div>
							</div>
							<InputGuests guestListing={guestLiting} />
						</div>
						{
							<ShownTab />
						}
					</form>
				</div>
				<ExpandButton
					handleExpand={handleExpandDes}
					state={bookingState.destination || 'Anywhere'}
				/>
				<ExpandButton
					handleExpand={handleExpandDate}
					state={rangeDateBooking || 'Anyweek'}
				/>
				<div className='flex flex-row'>
					<ExpandButton
						handleExpand={handleExpandGuest}
						state={totalGuest>0?
							'Guest '+totalGuest: 'Guest'}
					/>
					<ToogleSearch onClick={handleExpandSearch} type='button' />
				</div>
			</div>
		</div>
	);
}

export default Search;