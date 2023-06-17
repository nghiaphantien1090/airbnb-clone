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
    ControlType(controlType: GuestControlType):ActionCreatorWithPayload<GuestType,string>
  };
}

const GuestAction: GuestControl = (guest: GuestType) => {
  return {
    ControlType: (control: GuestControlType) => {
        let action
        if(control==='add'){
            action=  addGuest(guest) as any

        }
        if(control==='remove'){
            action= removeGuest(guest) as any
        }
        return action
    },
  };
};

export {useSelectTab,GuestAction };

