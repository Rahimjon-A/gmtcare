import { configureStore } from "@reduxjs/toolkit";
import  gmtSlice  from "../reducers/gmt";
import  cardSlice  from "../reducers/card";
import  wishSlice  from "../reducers/wish";


const store = configureStore({
    reducer: {
        gmt: gmtSlice,
        card: cardSlice, 
        wish: wishSlice, 
    },
});
  
export default store;