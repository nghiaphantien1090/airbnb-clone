import { useAppDispatch ,useAppSelector} from "@/app/hook/hookRedux";
import { BiSearch } from "react-icons/bi";
import { setExpandSearch } from "@/app/redux/reducer/SearchSlide";
import SearchSubmit from "./SearchSubmit";
import { PropsButton } from "./Button";
import { useState } from "react";
import { useSelectTab } from "@/app/hook/hook";

const InputGuests = () => {

	const [isShowSubmitBtn,setIsShowSubmitBtn]= useState(false)
 
	const dispatch = useAppDispatch()
	const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)	

	const handleExpandSearch = ()=>{
		dispatch(setExpandSearch())
		console.log(isExpandSearch)
	}
	
	const {selectTab}=useSelectTab()

	const handleClick=()=>{
		setIsShowSubmitBtn(prev=>!prev||true)
		selectTab({selectingTab:'addGuestTab'})
	}

	return (
		<div 
			onClick={handleClick}
			className='
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
					className='block  caret-current'
				>
					Add Guests
				</p>
			</div>
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