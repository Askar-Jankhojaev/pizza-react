import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    visible: false,
    pizzaId: null,
}

const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        showModal: (state, { payload }) => {
            state.visible = true;
            state.pizzaId = payload;
        },
        hideModal: (state) => {
            state.visible = false;
            state.pizzaId = null;
        }
    }
})

export default modalSlice.reducer

export const { showModal, hideModal } = modalSlice.actions
