'use client'
import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux"
import { setShowLoginModal, setShowMenuUser } from "@/app/redux/reducer/AccountSlide"
import { getSession, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { ReactElement } from "react"
import UserLink from "./UserLink"
import NotLogInMenu from "./NotLogInMenu"
import LoggedInMenu from "./LoggedInMenu"

const UserMenu = ({isShow}:{isShow:boolean}) => {

    const {data }= useSession()
    return (
        <div className= {`
            ${isShow?'visible':' hidden'}
            absolute
             top-12
             right-0
             w-56
             bg-slate-50
             py-2
             text-slate-700
             shadow-md
             h-auto
              rounded-2xl
             text-[14px]
             font-medium
             divide-y-[1px]
             transition-all
        `}
        >
            {data ?
                <LoggedInMenu />:
                <NotLogInMenu /> 
            }
        </div>
    )
}
export default UserMenu
