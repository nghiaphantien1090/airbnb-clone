'use client'
import { createAction, createReducer} from '@reduxjs/toolkit';
import { createECDH } from 'crypto';
import { type } from 'os';

//Hide or show search bar when toogle button search
const setExpandSearch = createAction('search/setExpand')

interface SearchBarState {
  isExpanded: boolean;
}

const initialState: SearchBarState = {
  isExpanded: false,
};

const ToogleSearchReducer = createReducer(initialState, (builder) => {  
  builder
    .addCase( setExpandSearch, (state:SearchBarState) => {
      state.isExpanded = !state.isExpanded
    })
});

export{setExpandSearch,ToogleSearchReducer }

//Select tab input for search
const selectInputTab = createAction<SelectedInputTab>('search/selectInputtab')

export interface SelectedInputTab{
  selectingTab:'destinationTab'|'checkInTab'|'checkOutTab'|'addGuestTab'|'experienceTab'|undefined
}

const initialSelectedTab: SelectedInputTab= {
  selectingTab: undefined,
};

const SelectTabSearchReducer = createReducer(initialSelectedTab, (builder) => {  
  
  builder
    .addCase( selectInputTab, (state:SelectedInputTab=initialSelectedTab ,action) => {
      state.selectingTab = action.payload.selectingTab
    })
});

export{selectInputTab,SelectTabSearchReducer }

//Booking information

export const selectDestination=createAction<string>('booking/selectDestination')
export const selectCheckInDate=createAction<Date>('booking/selectCheckInDate')
export const selectCheckOutDate=createAction<Date>('booking/selecCheckOutDate')
export const addGuest=createAction<GuestType>('booking/addGuest')

export type  GuestType='adult'|'children'|'infant'|'pet'

export type BookingInfoState = {
  destination?: string,
  checkInDate?: Date,
  checkOutDate?: Date,
  numberGuest: {
    [key in GuestType]:number 
  },
  maxAdultChildren:number
  maxInfant:number
  maxPet:number
  isEqualMaxChildrenAdult:boolean
  isEqualMaxInfant:boolean
  isEqualMaxPet:boolean
}

const initBooking: BookingInfoState = {
  numberGuest: {
    'adult': 0,
    'children': 0,
    'infant': 0,
    'pet': 0
  },
  maxInfant:5,
  maxPet:5,
  maxAdultChildren: 16,
  isEqualMaxChildrenAdult:false,
  isEqualMaxInfant:false,
  isEqualMaxPet:false
  
}

const BookingReducer = createReducer(initBooking,

  (builder) => {
    builder
      .addCase(selectDestination,
        (state, action) => {
          return { ...state, destination: action.payload }
        }
      )

      .addCase(selectCheckInDate, (state, action) => {
        return { ...state, checkInDate: action.payload }
      })

      .addCase(selectCheckOutDate, (state, action) => {
        return { ...state, checkOutDate: action.payload }
      })

      .addCase(addGuest, (state, action) => {

        if (action.payload === 'adult') {
          const updatedNumberGuest = {
            ...state.numberGuest,
            adult: state?.numberGuest.adult + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'children') {
          const updatedNumberGuest = {
            ...state.numberGuest,
            adult: state?.numberGuest.children + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'infant') {
          const updatedNumberGuest = {
            ...state.numberGuest,
            adult: state?.numberGuest.infant + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'pet') {
          const updatedNumberGuest = {
            ...state.numberGuest,
            adult: state?.numberGuest.pet + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }
      })

      .addMatcher(
        action => action.type === addGuest.type && ['adult', 'children'].includes(action.payload),
        (state, action) => {
          const adultChildrenCount = state.numberGuest.adult + state.numberGuest.children ;
          if (adultChildrenCount === state.maxAdultChildren) {
            return {...state,isEqualMaxChildrenAdult:true}
          }
        }
      )

      .addMatcher(
        action => action.type === addGuest.type && ['infant', 'pet'].includes(action.payload),
        (state, action) => {
          if (state.numberGuest.infant=== state.maxInfant) {
            return {...state,isEqualMaxInfant:true}
          }
          if (state.numberGuest.pet=== state.maxPet) {
            return {...state,isEqualMaxPet:true}
          }
        }
      )
  }
)

export {BookingReducer}
