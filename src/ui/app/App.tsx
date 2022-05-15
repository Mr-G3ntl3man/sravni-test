import React, {useEffect} from 'react';
import {Alert} from "@mui/material";
import {fetchCard} from "../../bll/card-slice";
import {HomePage} from "../components/HomePage";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {Spinner} from "../components/common/Spinner";

export const App = () => {
   const dispatch = useAppDispatch()
   const {errorMessage, loading, error} = useAppSelector(state => state.app)

   useEffect(() => {
      dispatch(fetchCard())
   }, [dispatch])

   return (
      <>
         {loading ? <Spinner/> : <HomePage/>}
         {error && <Alert severity="error">{errorMessage}</Alert>}
      </>
   )
}

