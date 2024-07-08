import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/order/orderSlice"
import userSlice from "../features/user/userSlice";

export const store=configureStore({
    reducer:{
        order: basketSlice,
        user:userSlice,

    }
})