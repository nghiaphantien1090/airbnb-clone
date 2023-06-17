import { useCallback } from "react"
import { addGuest, removeGuest, SelectedInputTab, selectInputTab } from "../redux/reducer/SearchSlide"
import { useAppDispatch, useAppSelector } from "./hookRedux"
import { GuestType } from "../redux/reducer/SearchSlide"
import { GuestControlType } from "../redux/reducer/SearchSlide"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"

const useSelectTab = () => {

    const selectedTab = useAppSelector(state => state.selectTabSearch.selectingTab)
    const dispatch=useAppDispatch()

    const selectTab = useCallback(
        (Tab: SelectedInputTab) => {
            dispatch(selectInputTab(Tab))
        }, [dispatch]
    )

    return (
        { selectTab }
    );
}

interface GuestControl {
  (guestType: GuestType): {
    ControlType(controlType: GuestControlType):any
  };
}

const GuestAction: GuestControl = (guest: GuestType) => {
  return {
    ControlType: (control: GuestControlType) => {
        let useAction
        if(control==='add'){
            useAction=  addGuest(guest) as any

        }
        if(control==='remove'){
            useAction= removeGuest(guest) as any
        }
        return useAction
    },
  };
};

export {useSelectTab,GuestAction };

