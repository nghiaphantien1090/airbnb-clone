import Tab from "./Tab";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { addGuest } from "@/app/redux/reducer/SearchSlide";
import { useAppDispatch } from "@/app/hook/hookRedux";
import { GuestType } from "@/app/redux/reducer/SearchSlide";
import { useAppSelector } from "@/app/hook/hookRedux";

const Guest = () => {

	const dispatch = useAppDispatch()

	const handleAddGuest = (guest:GuestType)=>{
		dispatch(addGuest(guest))
	}

	const bookingState = useAppSelector(state=>state.booking)

	console.log(bookingState)
	
		return (
				<Tab
						className='
								w-1/2
								h-[320px]
								right-0
						'
				>
						<>
						<div className='
							px-4
							 divide-y-[1px]	
						'>
							 	<GuestItem
									type='Adult'	
									description='Ages 13 or above'
									minusGuest={()=>{}}
									plusGuest={()=>handleAddGuest('adult')}
								/>
							 	<GuestItem
									type='Children'	
									description='Ages 2-12'
									minusGuest={()=>{}}
									plusGuest={()=>{}}
								/>
							 	<GuestItem
									type='Infants'	
									description='Ages under 2'
									minusGuest={()=>{}}
									plusGuest={()=>{}}
								/>
							 	<GuestItem
									type='Pets'	
									description='Bringing a service animal?'
									minusGuest={()=>{}}
									plusGuest={()=>{}}
								/>
						</div>
						</>
				</Tab>
		);

}

type PropsGuest={
		type:string
		description:string
		minusGuest:()=>void		
		plusGuest:()=>void		
}
const GuestItem: React.FC<PropsGuest> = ({
	type, description, minusGuest, plusGuest
}) => {

	return (
		<div
			className='
								flex
								flex-row
								justify-between
								py-4
						'
		>
			<div
				className='
										my-auto
								'
			>
				<h6
					className='
														text-[14px] 
														text-slate-700
														font-semibold
												'
				>
					{type}
				</h6>
				<p
					className='
														text-[12px]
														text-slate-400
												'
				>
					{description}
				</p>
			</div>
			<div
				className='
								flex
								flex-row
								my-auto
								gap-4
							'
			>
				<CiCircleMinus
				 	size={30}
					className='
						my-auto
						fill-slate-300
						hover:fill-slate-500
						cursor-pointer
					'
					onClick={minusGuest}
				/>
				<span
					className='
						text-[14px]	
						my-auto
					'
				>
					3
				</span>
				<CiCirclePlus
					size={30}
					className='
						my-auto
						fill-slate-300
						hover:fill-slate-500
						cursor-pointer
					'
					onClick={plusGuest}
				/>
			</div>
		</div>
	)
}

export default Guest











