import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice/productsSlice";
import  cartProductsSlice from './cartSlice/cartslice';
import modalSlice from "./modalSlice/modalSlice";

export const store = configureStore({
    reducer : {
        productsSlice,
        cartProductsSlice,
        modalSlice
    }
})