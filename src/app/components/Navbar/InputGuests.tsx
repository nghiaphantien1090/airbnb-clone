import { useAppDispatch ,useAppSelector} from "@/app/hook/hookRedux";
import { BiSearch } from "react-icons/bi";
import { removeAllGuest, setExpandSearch } from "@/app/redux/reducer/SearchSlide";
import SearchSubmit from "./SearchSubmit";
import { PropsButton } from "./Button";
import { useCallback, useState } from "react";
import { useSelectTab } from "@/app/hook/hook";
import { BookingInfoState } from "@/app/redux/reducer/SearchSlide";
import {TiDeleteOutline} from 'react-icons/ti'
import clsx from "clsx";
import { ClearStateBooking } from "./ClearStateBooking";

type GuestListing  = Pick<BookingInfoState,'guestListing' >

const InputGuests :React.FC<GuestListing>= ({guestListing}) => {

	const [isShowSubmitBtn,setIsShowSubmitBtn]= useState(false)
 
	const dispatch = useAppDispatch()
	const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)	

	const GuestListing:string = Object.entries(guestListing).map(([key, value]) => `${key}:${value}`).join(',');
	const totalGuest = Object.values(guestListing).reduce((a, b) => a + b);

	const handleExpandSearch = ()=>{
		dispatch(setExpandSearch())
	}

	const {selectTab}=useSelectTab()

	const handleClick=()=>{
		setIsShowSubmitBtn(prev=>!prev||true)
		selectTab({selectingTab:'addGuestTab'})
	}

	const handleClear= useCallback(()=>{
		dispatch(removeAllGuest())
	},[dispatch])

	return (
		<div 
			onClick={handleClick}
			className='
							relative
							text-[12px]
							w-1/3
							hover:rounded-full
							py-1
							pr-1
							pl-6
							cursor-pointer
						 	hover:bg-slate-100	 
							flex
							justify-between
						'>
			<div className='flex flex-col justify-center'>
				<label
					className='block font-semibold text-slate-600'
				>
					Who
				</label>
				<p
					className={clsx(`
					${totalGuest===0?'text-slate-600':'text-slate-400'} 
					line-clamp-1 
					w-16`)}
				>
					{totalGuest===0?'Add Guest': GuestListing}
				</p>
			</div>
			<ClearStateBooking
				isShow={totalGuest>0&&isExpandSearch?true:false}	
				onClick={handleClear}
				
			/>
			{
				isShowSubmitBtn?
				<SearchSubmit onClick={handleExpandSearch} type='button'/>
				:<ToogleSearch onClick={handleExpandSearch} type='button' />
			}
		</div>
	);
}

const ToogleSearch: React.FC<PropsButton> = ({ onClick, type = 'button' }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className='
									my-auto
									rounded-full
									bg-[#ff385c]	
									p-3
								'
		>
			<BiSearch fill=' white' size={16} />
		</button>
	)
}

export default InputGuests;


