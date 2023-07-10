import { configureStore } from "@reduxjs/toolkit";
import slideReducer from '../feature/slices/sliderSlice'

export const store = configureStore({
    reducer:{
        slider:slideReducer,
    }
})