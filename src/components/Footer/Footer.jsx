
import React from 'react'
import './Footer.scss'
import { Box, Container, Stack } from '@mui/material'
import { Typo_Smallfont, Typo_Subtitle } from '../Typo/Typo'

const Footer = () => {
  return (
    <div className='Footer'>
      <Container>
        <Stack alignItems={'center'}>
          <Box sx={{padding: 1.4}}>
            <Typo_Subtitle text='DUNES-OF-COSMOS © 2024 ALL RIGHTS RESERVED' fw='300' />
          </Box>

        </Stack>

      </Container>
    </div>
  )
}

export default Footer