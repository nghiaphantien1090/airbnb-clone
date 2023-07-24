import {IoMenuOutline} from 'react-icons/io5'
import {BsPersonCircle} from 'react-icons/bs'
import {memo} from 'react'
import UserMenu from './UserMenu';

const Account = () => {
	 
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
						<UserMenu/>	
					 	<button className='cursor-pointer'>
							<IoMenuOutline size={22} />
						</button>
					 	<button className='cursor-pointer'>
							<BsPersonCircle fill='' size={22}/>
						</button>
				</div>
		);
}
 
export default memo(Account);