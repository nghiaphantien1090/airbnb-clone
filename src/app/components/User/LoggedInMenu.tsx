import { signOut } from "next-auth/react"
import UserLink from "./UserLink"
import { useRouter } from "next/navigation"

const LoggedInMenu = ()=>{
    const router = useRouter()
    return(
        <div>
        <>
            <div className='
             flex
             flex-col
             gap-2
             pb-3
            '>
                <UserLink Content='Message' onClick={()=>router.push('/guests/box')} />
                <UserLink Content='Trips' onClick={()=>router.push('trips')} />
                <UserLink Content='Wishlists' onClick={()=>router.push('wishlist')} />
            </div>
            <div className='pt-3 flex flex-col gap-2'>
                <UserLink Content='Airbnb your home' onClick={() => router.push('/host/home')} />
                <UserLink Content='Account' onClick={() => router.push('/account')} />
            </div>
            <div className='pt-3 flex flex-col gap-2'>
                <UserLink Content='Help' onClick={() => router.push('/help')} />
                <UserLink Content='Logout' onClick={()=>signOut()} />
            </div>

        </>
        </div>
    )
}
export default LoggedInMenu