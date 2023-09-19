import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/user/authSlice";
import productReducer from "../features/product/productSlice"
import customerReducer from "../features/customer/customerSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        customer: customerReducer,
    },
});