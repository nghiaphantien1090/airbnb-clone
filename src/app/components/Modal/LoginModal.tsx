'use client'

import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux";
import { setShowLoginModal, setShowMenuUser } from "@/app/redux/reducer/AccountSlide";
import clsx from "clsx";
import { ReactElement, useState } from "react";
import { GoX} from "react-icons/go";
import { AiFillGithub, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import { signIn } from "next-auth/react";
import LoginLogoutEmail from "./LoginLogoutEmail";
import LoginLogoutPhone from "./LoginLogoutPhone";

const LoginModal = () => {
    type InputPhone={
        phone:string
    }
    type InputEmail={
        email?:string,
        password?:string
    }

    type typeLogin = 'email'|'phone'

    const [login,setLogin] = useState<typeLogin>('phone')

    const handleLogin=()=>{
        setLogin(prev=>prev==='email'?'phone':'email')
    }

    const [dataEmail,setDataEmail]=useState<InputEmail>()

    const isShowLoginModal = useAppSelector(state=>state.modalLoginLogout.isShowModal)
    const dispatch = useAppDispatch()

    const handleCloseLoginModal = () => {
        dispatch(setShowLoginModal())
        return
    } 
    
    const handleClickModal=()=>{
        dispatch(setShowLoginModal())
    }
     
    const [isShowSpin,setIsShowSpin]=useState(false)

    const handleVerifyPhoneNumber = (e:any)=>{
        e.preventDefault()
        setIsShowSpin(true)
        setTimeout(() => {
        setIsShowSpin(false)
        }, 5000);
    }

    const handleRegisterByEmail = (e:any)=>{
        e.preventDefault()
        setIsShowSpin(true)
        setTimeout(() => {
        setIsShowSpin(false)
        }, 5000);

    }
    
    return (
        <div className={`${isShowLoginModal?'visible':'hidden'} transition-all`}>
            <div className='
            fixed
            w-full
            h-full 
            bg-[#222222]
             opacity-50
            z-20
        '
            onClick={handleClickModal}
        >
            </div>

        <div className='h-screen flex justify-center'>
            <div className='
                relative
                m-auto
                w-[570px]
                h-auto
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
                    <button type='button' onClick={handleCloseLoginModal}>
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
                        {/* <form
                        className="
                         w-full p-2 mt-4
                        border-1
                        rounded-lg
                         divide-y-[1px]
                        ">
                            {
                                login === 'phone' ??
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
                            }
                            <div className='pt-3 relative'>
                                <p className='
                                bottom-2 
                                px-3 
                                '>
                                    {login==='phone'?'Phone number':'Email'}
                                </p>
                                <input type='text' name="phone-input" className="
                                w-full px-2 py-2 outline-none text-[16px] text-left
                                " 
                                />
                            </div>
                            {
                                login === 'phone' ?
                                <p className='
                         py-2
                         text-[12px] 
                        '>
                                    We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
                                </p>:
                                null
                            }
                        <LoginLogoutButton
                        isShowSpin={isShowSpin}
                        handleClick={handleRegisterByEmail}
                        />
                        </form> */}
                        {
                            login==='email'?
                            <LoginLogoutEmail/>:
                            <LoginLogoutPhone/>
                        }

                        <div className='
                         flex
                         flex-row
                         justify-between
                         my-6
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
                        <div className='
                         flex
                         flex-col
                         gap-2 
                        '>
                            <LoginSocialButton
                                SvgElement={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ 'display': 'block', 'height': '20px', 'width': '20px', }}><path fill="#1877F2" d="M32 0v32H0V0z"></path><path fill="#FFF" d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.63h4.06V32h5V20.62h3.73l.7-4.62z"></path></svg>
                                }
                                name={'Facebook'}
                                handleClick={()=>null}
                            />
                            <LoginSocialButton
                                SvgElement={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ 'display': 'block', 'height': '20px', 'width': '20px', }}><path fill="#4285f4" d="M24.12 25c2.82-2.63 4.07-7 3.32-11.19H16.25v4.63h6.37A5.26 5.26 0 0 1 20.25 22z"></path><path fill="#34a853" d="M5.62 21.31A12 12 0 0 0 24.12 25l-3.87-3a7.16 7.16 0 0 1-10.69-3.75z"></path><path fill="#fbbc02" d="M9.56 18.25c-.5-1.56-.5-3 0-4.56l-3.94-3.07a12.08 12.08 0 0 0 0 10.7z"></path><path fill="#ea4335" d="M9.56 13.69c1.38-4.32 7.25-6.82 11.19-3.13l3.44-3.37a11.8 11.8 0 0 0-18.57 3.43l3.94 3.07z"></path></svg>
                                }
                                name={'Google'}
                                handleClick={()=>null}
                            />
                            <LoginSocialButton
                                SvgElement={
                                <AiFillGithub size={20} />
                                }
                                name={'GitHub'}
                                handleClick={()=>signIn('github',{callbackUrl:'/'})}
                            />
                        {
                            login==='phone'?
                            <LoginSocialButton
                                SvgElement={
                                <AiOutlineMail size={20} />
                                }
                                name={'Email'}
                                handleClick={handleLogin}
                            />
                                :
                            <LoginSocialButton
                                SvgElement={
                                <AiOutlinePhone size={20} />
                                }
                                name={'Phone'}
                                handleClick={handleLogin}
                            />
                        }
                        </div>
                    </div>
            </div>
        </div>
        </div>

    )
}
export default LoginModal 

interface SocialButtonProps{
    SvgElement:any,
    name:string,
    handleClick:()=>void
};
const LoginSocialButton =({SvgElement,name,handleClick}:SocialButtonProps)=>{

    return(
        <button type='button' onClick={handleClick} className='
        w-full
        h-[40px]
        bg-white
        border-[1px]
        border-slate-600
        rounded-lg
        m-auto
        px-9
        '>
            <div className='
        flex
        flex-row
        my-auto
            '>
                <div className='m-auto '>
                        {SvgElement}
                </div>
                <p className='
             flex-grow
             text-center 
             text-black
             text-[16px]
            '>{name}</p>
            </div>
        </button>
    )
}
const LoginLogoutButton = ({isShowSpin,handleClick}:{
    isShowSpin:boolean,handleClick:(e:any)=>void
})=>{
    return(
                        <button 
                        onClick={handleClick}
                        className={clsx(`
                         w-full
                        h-12
                        bg-pink-600
                        rounded-lg
                        text-[16px]
                        text-white
                         font-semibold
                         flex
                         flex-row
                         relative 
                         ${isShowSpin?'cursor-not-allowed opacity-50':''}
                         `
                        )
                        }>
                            <div className={clsx(' absolute top-3 left-4 px-4 my-auto ',isShowSpin?'visible':'hidden' ) }>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                            <p className='m-auto flex-grow'>
                                Continue
                            </p>
                        </button>


    )


}