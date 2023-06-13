import InputCheckIn from "./InputCheckIn";
import InputCheckOut from "./InputCheckOut";

const Stays = () => {
    return (
        <div 
            className='
                flex flex-row gap-4 
            '>
            <InputCheckIn/>
            <InputCheckOut/>
        </div>
    );
}

export default Stays;