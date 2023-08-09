import LoginLogoutButton from "./LoginLogoutButton"

const LoginLogoutPhone = ()=>{
    const isShowSpin=true
    const handleRegisterByPhone =()=>{

    }
return(
                        <form
                        className="
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
                                <input type='text' name="phone-input" className="
                                w-full px-2 py-2 outline-none text-[16px] text-left
                                " 
                                />
                            </div>
                                <p className='
                         py-2
                         text-[12px] 
                        '>
                                    We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                                </p>
                        <LoginLogoutButton
                        isShowSpin={isShowSpin}
                        handleClick={handleRegisterByPhone}
                        />
                        </form>


)

}
export default LoginLogoutPhone