'use client'
import { createAction, createReducer} from '@reduxjs/toolkit';
import { createECDH } from 'crypto';
import { stat } from 'fs';
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
export const removeAllGuest =createAction('booking/removeAllGuest')
export const removeDestination =createAction('booking/removeDestination')
export const removeCheckInDate=createAction('booking/removeCheckInDate')
export const removeCheckOutDate=createAction('booking/removeCheckOutDate')



export type  GuestType='adult'|'children'|'infant'|'pet'

export type BookingInfoState = {
  destination?: string,
  checkInDate?: Date|string,
  checkOutDate?: Date|string,
  guestListing: {
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
  guestListing: {
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
  isEqualMaxPet:false,
  checkInDate:'23-Jul',
  checkOutDate:'24-Jul'
  
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
            ...state.guestListing,
            adult: state?.guestListing.adult + 1
          };
          return { ...state, guestListing: updatedNumberGuest }
        }

        if (action.payload === 'children'&& !state.isEqualMaxChildrenAdult) {
          const updatedNumberGuest = {
            ...state.guestListing,
            children: state?.guestListing.children + 1
          };
          return { ...state, guestListing: updatedNumberGuest }
        }

        if (action.payload === 'infant' && !state.isEqualMaxInfant) {
          const updatedNumberGuest = {
            ...state.guestListing,
            infant: state?.guestListing.infant + 1
          };
          return { ...state, guestListing: updatedNumberGuest }
        }

        if (action.payload === 'pet' && !state.isEqualMaxPet) {
          const updatedNumberGuest = {
            ...state.guestListing,
            pet: state?.guestListing.pet + 1
          };
          return { ...state, guestListing: updatedNumberGuest }
        }
      })

      .addCase(removeDestination,(state,action)=>{
        return{
          ...state,destination:undefined
        }
      })

      .addCase(removeCheckInDate,(state,action)=>{
        return{
          ...state,checkInDate:undefined
        }
      })

      .addCase(removeCheckOutDate,(state,action)=>{
        return{
          ...state,checkOutDate:undefined
        }
      })

      .addCase(removeGuest, (state, action) => {

        if (action.payload === 'adult' ) {
          const updatedNumberGuest = {
            ...state.guestListing,
            adult:state.guestListing.adult>0? state?.
            guestListing.adult -1:state.guestListing.adult
          };
          return { ...state, guestListing: updatedNumberGuest }
        }

        if (action.payload === 'children') {
          const updatedNumberGuest = {
            ...state.guestListing,
            children: state.guestListing.children>0?state?.
            guestListing.children - 1:state.guestListing.children
          };
          return { ...state, guestListing: updatedNumberGuest }
        }

        if (action.payload === 'infant' ) {
          const updatedNumberGuest = {
            ...state.guestListing,
            infant: state.guestListing.infant>0?
            state?.guestListing.infant - 1:
            state.guestListing.infant
          };
          return { ...state, guestListing: updatedNumberGuest }
        }

        if (action.payload === 'pet' ) {
          const updatedNumberGuest = {
            ...state.guestListing,
            pet: state.guestListing.pet>0?state?.guestListing.pet - 1:
            state.guestListing.pet
          };
          return { ...state, guestListing: updatedNumberGuest }
        }
      })

      .addCase(removeAllGuest, (state, action) => {
        console.log(action.type)
        const numberGuest = {
          ...state.guestListing, adult: 0,
          children: 0, infant: 0, pet: 0
        }
        return {
          ...state, isEqualMaxChildrenAdult:false,
          isEqualMaxInfant: false, isEqualMaxPet: false,
          guestListing: numberGuest
        }
      })

      .addMatcher(
        action => action.type === addGuest.type || action.type === removeGuest.type
          && ['adult', 'children'].includes(action.payload),
        (state, action) => {

          let isEqualMaxChildrenAdult = false

          const adultChildrenCount = state.guestListing.adult + state.guestListing.children;

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
          if (state.guestListing.infant === state.maxInfant) {
            isEqualMaxInfant = true
          }

          let isEqualMaxPet = false
          if (state.guestListing.pet === state.maxPet) {
            isEqualMaxPet = true
          }
          return { ...state, isEqualMaxInfant, isEqualMaxPet }
        }
      )
  }
)

export {BookingReducer}

export type GuestControlType='add'|'remove'

