import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

export const Header = () => (
   <AppBar position="fixed">
      <Toolbar variant="dense">
         <Typography
            variant="h6"
            color="inherit"
            component="h1">
            Наш суперкофе
         </Typography>
      </Toolbar>
   </AppBar>
)

