'use client'
import {IoMenuOutline} from 'react-icons/io5'
import {BsPersonCircle} from 'react-icons/bs'
import {memo, useState} from 'react'
import UserMenu from './UserMenu';
import { useAppDispatch, useAppSelector } from '@/app/hook/hookRedux';
import { setShowMenuUser } from '@/app/redux/reducer/AccountSlide';


const Account = () => {

	const dispath = useAppDispatch()
	const handleAccount=()=>{
		dispath(setShowMenuUser())
	}
	const isShowMenuUser = useAppSelector(state=>state.menuUser.isShowMenuUser)

		return (
				<div
					className='
					 	my-auto
						flex
						flex-row
						gap-3
						p-2
						rounded-full
						border-[1px]
						border-slate-200
						relative
					'	
				>
						<UserMenu isShow={isShowMenuUser}/>	
					 	<button type='button' className='cursor-pointer' onClick={handleAccount}>
							<IoMenuOutline size={22} />
						</button>
					 	<button type='button' className='cursor-pointer' onClick={handleAccount}>
							<BsPersonCircle fill='' size={22}/>
						</button>
				</div>
		);
}
 
export default memo(Account);