import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DataT} from "../dal/dataTypes";
import {sravniApi} from "../dal/sravni-api";

const initialState: InitialStateT = {
   card: []
}

export const fetchCard = createAsyncThunk(
   'card/fetchCard',
   async (_, {rejectWithValue}) => {
      try {
         return await sravniApi.getData()
      } catch (err) {
         return rejectWithValue(err instanceof Error ? err.message : 'Что-то пошло не так...')
      }
   }
)

export const cardSlice = createSlice({
   name: 'card',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchCard.fulfilled.type]: (state: InitialStateT, action: PayloadAction<DataT[]>) => {
         state.card = action.payload
      },
   }
})

type InitialStateT = {
   card: DataT[]
}