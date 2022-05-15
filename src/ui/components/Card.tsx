import React, {FC} from 'react';
import {DataT} from "../../dal/dataTypes";
import {Paper, Typography} from "@mui/material";

type CardT = {
   card: DataT
}

export const Card: FC<CardT> = ({card}) => (
   <Paper sx={{
      margin: '10px',
      padding: '10px',
      flex: '0 1 320px'
   }} elevation={3}>

      <Typography
         variant={'h6'}
         component={'h3'}>
         {card.blend_name}
      </Typography>

      <Typography
         variant="subtitle1"
         component="div">
         {card.origin}
      </Typography>

      <Typography
         variant="subtitle2"
         component="div">
         {card.notes}
      </Typography>

   </Paper>
)
