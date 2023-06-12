'use client'
import { combineReducers } from '@reduxjs/toolkit';
import { SearchSlice} from './reducer/SearchSlide';

const rootReducer = combineReducers({
  toogleSearch: SearchSlice,
});

export default rootReducer;