import Tab from "./Tab";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { addGuest, removeGuest } from "@/app/redux/reducer/SearchSlide";
import { useAppDispatch } from "@/app/hook/hookRedux";
import { GuestType } from "@/app/redux/reducer/SearchSlide";
import { useAppSelector } from "@/app/hook/hookRedux";
import { GuestAction} from "@/app/hook/hook";
import { memo, useCallback, useMemo } from "react";
import clsx from "clsx";

const Guest = () => {

	const dispatch = useAppDispatch()

	const bookingState = useAppSelector(state=>state.booking)

	const numberAdult = bookingState.numberGuest.adult
	const numberChildren = bookingState.numberGuest.children
	const numberInfant = bookingState.numberGuest.infant
	const numberPet = bookingState.numberGuest.pet

	const disabledAdultChildren=useMemo(()=>{
		return bookingState.isEqualMaxChildrenAdult
	},[bookingState.isEqualMaxChildrenAdult])

	const disableInfant = useMemo(()=>{
		return bookingState.isEqualMaxInfant
	},[bookingState.isEqualMaxInfant])

	const disablePet= useMemo(()=>{
		return bookingState.isEqualMaxPet
	},[bookingState.isEqualMaxPet])

	const handlePlusAdult = useCallback(()=>{
		dispatch(GuestAction('adult').ControlType('add'))
	},[dispatch])

	const handlePlusChildren= useCallback(()=>{
		dispatch(GuestAction('children').ControlType('add'))
	},[dispatch])

	const handlePlusInfant= useCallback(()=>{
		dispatch(GuestAction('infant').ControlType('add'))
	},[dispatch])

	const handlePlusPet= useCallback(()=>{
		dispatch(GuestAction('pet').ControlType('add'))
	},[dispatch])

	//remove guest

	const handleRemoveAdult = useCallback(()=>{
		dispatch(GuestAction('adult').ControlType('remove'))
	},[dispatch])

	const handleRemoveChildren= useCallback(()=>{
		dispatch(GuestAction('children').ControlType('remove'))
	},[dispatch])

	const handleRemoveInfant= useCallback(()=>{
		dispatch(GuestAction('infant').ControlType('remove'))
	},[dispatch])

	const handleRemovePet= useCallback(()=>{
		dispatch(GuestAction('pet').ControlType('remove'))
	},[dispatch])
	
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
									numberGuest={numberAdult}
									minusGuest={handleRemoveAdult}
									plusGuest={handlePlusAdult}
									disablePlus={disabledAdultChildren}
								/>
							 	<GuestItem
									type='Children'	
									description='Ages 2-12'
									numberGuest={numberChildren}
									minusGuest={handleRemoveChildren}
									plusGuest={handlePlusChildren}
									disablePlus={disabledAdultChildren}
								/>
							 	<GuestItem
									type='Infants'	
									description='Ages under 2'
									numberGuest={numberInfant}
									minusGuest={handleRemoveInfant}
									plusGuest={handlePlusInfant}
									disablePlus={ disableInfant }
								/>
							 	<GuestItem
									type='Pets'	
									description='Bringing a service animal?'
									numberGuest={numberPet}
									minusGuest={handleRemovePet}
									plusGuest={ handlePlusPet}
									disablePlus={disablePet}
								/>
						</div>
						</>
				</Tab>
		);

}

type PropsGuest={
		type:string
		description:string
		numberGuest:number
		disablePlus:boolean
		minusGuest:()=>void		
		plusGuest:()=>void		
}
const GuestItem: React.FC<PropsGuest> = memo(({
	type, description, minusGuest, plusGuest, numberGuest, disablePlus: disable
}) => {

	return (
		<div
			aria-disabled
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
														text-slate-500
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
					className={clsx(`
						my-auto
						${numberGuest===0? 'cursor-not-allowed fill-slate-200' : 'cursor-pointer hover:fill-slate-500'}
					`)}		
					onClick={minusGuest}
				/>
				<span
					className='
						text-[14px]	
						my-auto
						w-6
						mx-auto
						text-center
					'
				>
					{numberGuest}
				</span>
				<CiCirclePlus
					size={30}
					className={clsx(
						`
						my-auto
						${disable ? 'cursor-not-allowed fill-slate-200' : 'cursor-pointer hover:fill-slate-500'}
						`
					)}
					onClick={plusGuest}
				/>
			</div>
		</div>
	)
}
)

export default Guest










