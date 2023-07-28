'use client'
import { combineReducers } from '@reduxjs/toolkit';
import { BookingReducer, ToogleSearchReducer, SelectTabSearchReducer} from './reducer/SearchSlide';
import { ShowMenuUserReducer, ShowModalReducer } from './reducer/AccountSlide';

const rootReducer = combineReducers({
  toogleSearch: ToogleSearchReducer,
  selectTabSearch:SelectTabSearchReducer,
  booking:BookingReducer,
  menuUser:ShowMenuUserReducer,
  modalLoginLogout:ShowModalReducer
  
});

export default rootReducer;