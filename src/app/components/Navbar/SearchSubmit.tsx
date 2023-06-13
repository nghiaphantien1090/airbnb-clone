import { BiSearch } from "react-icons/bi";
import Button, { PropsButton } from "./Button";

const SearchSubmit :React.FC<PropsButton>= ({onClick,type='button'}) => {
    return ( 

        <Button
            onClick={onClick}
            type={type}
            className='
						w-24
						h-[90%]
                        py-2
						my-auto
						rounded-full
						bg-[#e24562]	
						mr-1
                        flex
                        flex-row
                        gap-1
						align-middle
                        text-center
                        px-2
                        justify-center
					'
        >
            <>
                <BiSearch className='my-auto' fill=' white' size={15} />
                <p className='my-auto text-[14px] text-white text-semibold'>Search</p>
            </>
        </Button>

     );
}
 
export default SearchSubmit;