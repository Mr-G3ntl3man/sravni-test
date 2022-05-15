import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appSlice} from "./app-slice";
import {cardSlice} from "./card-slice";

export const store = configureStore({
   reducer: {
      app: appSlice.reducer,
      card: cardSlice.reducer,
   }
})

export type AppDispatch = typeof store.dispatch
export type AppRootStateT = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateT> = useSelector
