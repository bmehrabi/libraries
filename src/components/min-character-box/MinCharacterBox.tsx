import Box from '@mui/material/Box';
import * as React from 'react';
import {IMinCharacterBoxProps} from './typings';
import Title from 'src/components/Title';

export default function MinCharacterBox ({minLength}: IMinCharacterBoxProps) {
  return (
    <Box sx={{ m: 2 }}>
      <Title>
        Please enter a search query inside search field (at least {minLength} letters).
      </Title>
    </Box>
  );
}