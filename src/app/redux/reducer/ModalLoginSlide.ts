'use client'
import { createAction, createReducer} from '@reduxjs/toolkit';

const setShowLoginModal = createAction('login/showModal')

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