'use client'
import { useRouter } from "next/navigation"
import React, { ReactElement } from "react"

const UserMenu = ({isShow}:{isShow:boolean}) => {

    const router = useRouter()

    const handleUser = () => {
    }

    return (
        <div className= {`
            ${isShow?'visible':' hidden'}
            absolute
             -bottom-[180px]
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
            <div className='
             flex
             flex-col
             gap-2
             pb-3
            '>
                <UserLink Content='Login' onClick={handleUser} />
                <UserLink Content='Signup' onClick={handleUser} />
            </div>
            <div className='pt-3 flex flex-col gap-2'>
                <UserLink Content='Airbnb your home' onClick={() => router.push('/host/home')} />
                <UserLink Content='Help' onClick={() => router.push('/help')} />
            </div>
        </div>
    )
}
export default UserMenu

interface PropsLinks {
    Content: string
    onClick: () => void
}

const UserLink: React.FC<PropsLinks> = ({ Content, onClick }) => {
    return (
        <button type='button'
        className='
         cursor-pointer
         py-1
         px-4
          text-left
        '
            onClick={onClick}
        >
            {Content}
        </button>
    )
}


