import logo from '../../../../public/airbnb.png'
import Image from 'next/image';

const Logo = () => {
	return (
		<a
			className='
				my-auto	
				flex
				cursor-pointer
				
			'	
		>
				<Image
					src={logo}	
					alt='www.google.com.vn'
					width='125'
					height='70'
				/>
		</a> 
		);
}
 
export default Logo;