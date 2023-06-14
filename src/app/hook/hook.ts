import { SelectedInputTab, selectInputTab } from "../redux/reducer/SearchSlide"
import { useAppDispatch, useAppSelector } from "./hookRedux"

const useSelectTab = () => {

    const selectedTab = useAppSelector(state => state.selectTabSearch.selectingTab)
    const dispatch=useAppDispatch()

    const selectTab = (Tab: SelectedInputTab) => {
        dispatch(selectInputTab(Tab))
        console.log(selectedTab)
    }

    return (
        { selectTab }
    );
}

export {  useSelectTab};

