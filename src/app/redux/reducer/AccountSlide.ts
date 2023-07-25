'use client'
import { createAction, createReducer} from '@reduxjs/toolkit';

//work with menu account user
const setShowMenuUser = createAction('account/menuUser')
interface MenuState{
    isShowMenuUser: boolean
}

const initialMenuState: MenuState= {
  isShowMenuUser: false,
};

const ShowMenuUserReducer = createReducer(initialMenuState, (builder) => {  
  builder
    .addCase( setShowMenuUser, (state:MenuState) => {
      state.isShowMenuUser= !state.isShowMenuUser
});
})

export {setShowMenuUser,ShowMenuUserReducer}

//work with login modal
const setShowLoginModal = createAction('account/showModal')

interface ModalState{
    isShowModal: boolean
}

const initialState: ModalState= {
  isShowModal: false,
};

const ShowModalReducer = createReducer(initialState, (builder) => {  
  builder
    .addCase( setShowLoginModal, (state:ModalState) => {
      state.isShowModal= !state.isShowModal
    })
});

export {setShowLoginModal,ShowModalReducer}