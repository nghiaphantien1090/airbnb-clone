'use client'
import { createAction, createReducer} from '@reduxjs/toolkit';

//Hide or show search bar when toogle button search
const setExpandSearch = createAction('search/setExpand')

interface SearchBarState {
  isExpanded: boolean;
}

const initialState: SearchBarState = {
  isExpanded: false,
};

const SearchSlice = createReducer(initialState, (builder) => {  
  builder
    .addCase( setExpandSearch, (state:SearchBarState) => {
      state.isExpanded = !state.isExpanded
    })
});

export{setExpandSearch,SearchSlice}

//Select tab input for search
const selectInputTab = createAction<SelectedInputTab>('search/selectInputtab')

export interface SelectedInputTab{
  selectingTab:'destinationTab'|'checkInTab'|'checkOutTab'|'addGuestTab'|'experienceTab'|undefined
}

const initialSelectedTab: SelectedInputTab= {
  selectingTab: undefined,
};

const TabSearchSlice = createReducer(initialSelectedTab, (builder) => {  
  builder
    .addCase( selectInputTab, (state:SelectedInputTab=initialSelectedTab ,action) => {
      state.selectingTab = action.payload.selectingTab
    })
});

export{selectInputTab,TabSearchSlice}
