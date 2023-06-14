import InputCheckIn from "./InputCheckIn";
import InputCheckOut from "./InputCheckOut";

const Stays = () => {
    return (
        <div 
            className='
                flex flex-row justify-between h-full
            '>
            <InputCheckIn 
                selectedInputTab={{selectingTab:'checkInTab'}} 
            />
            <InputCheckOut
                selectedInputTab={{selectingTab:'checkOutTab'}} 
            />
        </div>
    );
}

export default Stays;