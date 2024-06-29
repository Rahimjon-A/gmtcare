import { configureStore } from "@reduxjs/toolkit";
import  gmtSlice  from "../reducers/gmt";


const store = configureStore({
    reducer: {
        gmt: gmtSlice,
    },
});
  
export default store;