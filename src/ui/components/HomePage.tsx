import React from 'react';
import {Header} from "./Header";
import {Box, Container, Typography} from "@mui/material";
import {useAppSelector} from "../../bll/store";
import {Card} from "./Card";

export const HomePage = () => {
   const {card} = useAppSelector(state => state.card)

   const cards = card.map(c => <Card key={c.uid} card={c}/>)

   return (
      <Container sx={{paddingTop: '60px'}}>
         <Header/>

         <Box
            sx={{
               display: 'flex',
               flexWrap: 'wrap',
               justifyContent: 'center'
            }}>
            {cards}
         </Box>

         {!cards &&
         <Typography
            variant={'h4'}
            component={'div'}
            textAlign={'center'}>
            Нет данных
         </Typography>}
      </Container>
   )
}

