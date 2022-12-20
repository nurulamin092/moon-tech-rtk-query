import { productApi } from "../features/api/apiSlice";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        [productApi.reducerPath] : productApi.reducer,
        cart: cartSlice,
        filter: filterSlice,
       
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productApi.middleware),


})

export default store;