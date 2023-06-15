'use client'
import { combineReducers } from '@reduxjs/toolkit';
import { BookingReducer, ToogleSearchReducer, SelectTabSearchReducer} from './reducer/SearchSlide';

const rootReducer = combineReducers({
  toogleSearch: ToogleSearchReducer,
  selectTabSearch:SelectTabSearchReducer,
  booking:BookingReducer
  
});

export default rootReducer;