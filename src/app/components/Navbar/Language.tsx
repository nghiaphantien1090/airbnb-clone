import {MdLanguage} from 'react-icons/md'
const Language = () => {
	return (
		<button
			className='
				my-auto	
				rounded-full
				hover:bg-slate-100
				p-3
			    cursor-pointer
			'
		>
			<MdLanguage size='20' />
		</button>
	);
}

export default Language;