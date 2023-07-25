import { GoX} from "react-icons/go";
const LoginModal = () => {

    return (
        <>
            <div className='
            fixed
            w-full
            h-full 
            bg-[#222222]
             opacity-50
            z-20
        '>
            </div>

        <div className='h-screen flex justify-center'>
            <div className='
                relative
                m-auto
                w-[570px]
                h-[660px]
                bg-white 
                 rounded-2xl
                 z-[600]
                 divide-y-2
                 flex
                 flex-col
            '>
                    <div className='
             flex
             flex-row 
             px-6
             divide-y-2
            '>
                        <div className='
                 my-auto 
                 w-12
                '>
                    <button type='button'>
                            <GoX size={16} />
                    </button>
                        </div>
                        <h6 className='
                p-3
                m-auto 
                text-center
                text-[16px] 
                text-slate-800
                font-semibold
                '>
                            Login or sign up
                        </h6>
                    </div>
                    <div className='
                     p-6 
                     h-auto
                    '>
                        <h2 className='
                         text-[20px] 
                         text-black
                        '>
                            Welcome to AirBnB
                        </h2>
                        <div className="
                         w-full p-2 mt-4
                        border-1
                        rounded-lg
                         divide-y-[1px]
                        ">
                            <div>
                                <p className='px-3'>
                                    Select country
                                </p>
                                <select className="w-full px-2 py-2 outline-none text-[16px] text-left " >
                                    <option value="Viet Nam(+84)">Viet Nam(+84)</option>
                                    <option value="English(USA)">English(USA)</option>
                                    <option value="English(Kingdom)">English(Kingdom)</option>
                                    <option value="English(Australia)">English(Australia)</option>
                                </select>
                            </div>
                            <div className='pt-3 relative'>
                                <p className='
                                bottom-2 
                                px-3 
                                 
                                '>
                                    Phone number
                                </p>
                                <input type='text' className="
                                w-full px-2 py-2 outline-none text-[16px] text-left
                                
                                " 
                                >
                                </input>
                            </div>
                        </div>
                        <p className='
                         py-2
                         text-[12px] 
                        '>
                            We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                        </p>
                        <button className='
                        w-full
                        h-12
                        bg-pink-600
                        rounded-lg
                        text-[16px]
                        text-white
                         font-semibold
                        
                        '>
                            Continue
                        </button>
                        <div className='
                         flex
                         flex-row
                         justify-between
                         mt-6
                        '>
                            <div className='
                             border-t-[1px]
                              border-slate-500
                             w-[45%]
                           '/>
                            <span className=' flex-grow text-center text-[10px]'>Or</span>
                            <div className='
                             w-[45%]
                              border-slate-500
                             border-t-[1px]
                           '/>
                        </div>
                    </div>
            </div>
        </div>
        </>

    )
}
export default LoginModal 