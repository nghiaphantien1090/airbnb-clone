import { BiSearch } from "react-icons/bi";
import Button from "./Button";

import { PropsButton } from "./Button";
const ToogleSearch :React.FC<PropsButton>= (
    {onClick,type='button'}
) => {
    return (
        <Button
            onClick={onClick}
            type={type}
            className='
						w-8
						h-8
						my-auto
						rounded-full
						bg-[#ff385c]	
						mr-2
						p-2
					'
        >
            <BiSearch fill=' white' />
        </Button>
    );
}

export default ToogleSearch;