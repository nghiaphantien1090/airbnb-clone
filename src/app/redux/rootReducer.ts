'use client'
import { combineReducers } from '@reduxjs/toolkit';
import { SearchSlice, TabSearchSlice} from './reducer/SearchSlide';

const rootReducer = combineReducers({
  toogleSearch: SearchSlice,
  selectTabSearch:TabSearchSlice
});

export default rootReducer;