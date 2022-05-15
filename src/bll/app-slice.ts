import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCard} from "./card-slice";

const initialState: InitialStateT = {
   error: false,
   loading: false,
   errorMessage: ''
}

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchCard.fulfilled.type]: (state: InitialStateT) => {
         state.error = false
         state.loading = false
      },
      [fetchCard.pending.type]: (state: InitialStateT) => {
         state.loading = true
      },
      [fetchCard.rejected.type]: (state: InitialStateT, action: PayloadAction<string>) => {
         state.error = true
         state.loading = false
         state.errorMessage = action.payload
      },
   }
})

type InitialStateT = {
   error: boolean
   loading: boolean
   errorMessage: string
}