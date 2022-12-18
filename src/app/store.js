import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import logger from "redux-logger"
import productsSlice from "../features/products/productsSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        cart: cartSlice,
        filter: filterSlice,
        products:productsSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware ().concat()

})

export default store;