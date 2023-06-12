'use client'
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export const setExpandSearch = createAction('search/setExpand')

interface SearchBarState {
  isExpanded: boolean;
}

const initialState: SearchBarState = {
  isExpanded: false,
};

export const SearchSlice = createReducer(initialState, (builder) => {  
  builder
    .addCase( setExpandSearch, (state:SearchBarState) => {
      state.isExpanded = !state.isExpanded
    })
});

