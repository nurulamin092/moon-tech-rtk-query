import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import logger from "redux-logger"

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        cart: cartSlice,
        filter: filterSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware ().concat(logger)

})

export default store;