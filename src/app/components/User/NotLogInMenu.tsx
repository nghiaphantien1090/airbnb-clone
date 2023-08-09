import { useRouter } from "next/navigation"
import UserLink from "./UserLink"
import { useAppDispatch, useAppSelector } from "@/app/hook/hookRedux"
import { setShowLoginModal, setShowMenuUser } from "@/app/redux/reducer/AccountSlide"

const NotLogInMenu= ()=>{
    const router = useRouter()
    const dispath = useAppDispatch()

    const useSelector = useAppSelector(state=>state.modalLoginLogout.isShowModal)

    const handleShowLoginModal= () => {
        dispath(setShowLoginModal())
        dispath(setShowMenuUser())
    }

    return(
        <>

            <div className='
             flex
             flex-col
             gap-2
             pb-3
            '>
                <UserLink Content='Login' onClick={handleShowLoginModal} />
                <UserLink Content='Signup' onClick={handleShowLoginModal} />
            </div>
            <div className='pt-3 flex flex-col gap-2'>
                <UserLink Content='Airbnb your home' onClick={() => router.push('/host/home')} />
                <UserLink Content='Help' onClick={() => router.push('/help')} />
            </div>

        </>
    )
}
export default NotLogInMenu