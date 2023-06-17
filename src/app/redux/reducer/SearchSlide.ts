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
export const removeGuest =createAction<GuestType>('booking/removeGuest')

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

        if (action.payload === 'adult' && !state.isEqualMaxChildrenAdult) {
          const updatedNumberGuest = {
            ...state.numberGuest,
            adult: state?.numberGuest.adult + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'children'&& !state.isEqualMaxChildrenAdult) {
          const updatedNumberGuest = {
            ...state.numberGuest,
            children: state?.numberGuest.children + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'infant' && !state.isEqualMaxInfant) {
          const updatedNumberGuest = {
            ...state.numberGuest,
            infant: state?.numberGuest.infant + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'pet' && !state.isEqualMaxPet) {
          const updatedNumberGuest = {
            ...state.numberGuest,
            pet: state?.numberGuest.pet + 1
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }
      })

      .addCase(removeGuest, (state, action) => {

        if (action.payload === 'adult' ) {
          const updatedNumberGuest = {
            ...state.numberGuest,
            adult:state.numberGuest.adult>0? state?.
            numberGuest.adult -1:state.numberGuest.adult
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'children') {
          const updatedNumberGuest = {
            ...state.numberGuest,
            children: state.numberGuest.children>0?state?.
            numberGuest.children - 1:state.numberGuest.children
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'infant' ) {
          const updatedNumberGuest = {
            ...state.numberGuest,
            infant: state.numberGuest.infant>0?
            state?.numberGuest.infant - 1:
            state.numberGuest.infant
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }

        if (action.payload === 'pet' ) {
          const updatedNumberGuest = {
            ...state.numberGuest,
            pet: state.numberGuest.pet>0?state?.numberGuest.pet - 1:
            state.numberGuest.pet
          };
          return { ...state, numberGuest: updatedNumberGuest }
        }
      })

      .addMatcher(
        action => action.type === addGuest.type || action.type === removeGuest.type
          && ['adult', 'children'].includes(action.payload),
        (state, action) => {

          let isEqualMaxChildrenAdult = false

          const adultChildrenCount = state.numberGuest.adult + state.numberGuest.children;

          if (adultChildrenCount === state.maxAdultChildren) {
            isEqualMaxChildrenAdult = true
          }

          return { ...state, isEqualMaxChildrenAdult }

        }
      )

      .addMatcher(
        action => action.type === addGuest.type || action.type === removeGuest.type
          && ['infant', 'pet'].includes(action.payload),
        (state, action) => {

          let isEqualMaxInfant = false
          if (state.numberGuest.infant === state.maxInfant) {
            isEqualMaxInfant = true
          }

          let isEqualMaxPet = false
          if (state.numberGuest.pet === state.maxPet) {
            isEqualMaxPet = true
          }
          return { ...state, isEqualMaxInfant, isEqualMaxPet }
        }
      )
  }
)

export {BookingReducer}

export type GuestControlType='add'|'remove'

interface GuestControl {
  (guestType: GuestType): {
    ControlType(controlType: GuestControlType):void 
  };
}

const control: GuestControl = (guest: GuestType) => {
  return {
    ControlType: (control: GuestControlType) => {
      return {
        Quantity: (quantity: number) => {

          

        }
      }
    },
  };
};

control('adult').ControlType('add').Quantity(23)