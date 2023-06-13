import { useAppDispatch ,useAppSelector} from "@/app/hook/hookRedux";
import { BiSearch } from "react-icons/bi";
import { setExpandSearch } from "@/app/redux/reducer/SearchSlide";

const InputGuests = () => {
 
	const dispatch = useAppDispatch()
	const isExpandSearch = useAppSelector(state=>state.toogleSearch.isExpanded)	

	const handleExpandSearch = ()=>{
		dispatch(setExpandSearch())
		console.log(isExpandSearch)
	}

    return (
					  <div className='
							text-[6px]
							hover:rounded-full
							py-1
							pr-1
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
								<p
									className='block  caret-current'
								>
									Add Guests
								</p>
							</div>
							<button
								type='button'
								onClick={handleExpandSearch}
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

      );
}
 
export default InputGuests;