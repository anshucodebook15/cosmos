
import React from 'react'
import './Contact.scss'
import Glassmorph from '../Glassmorph/Glassmorph'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Typo_Basefont, Typo_Smallfont } from '../Typo/Typo'


const Contact = () => {

  return (
    <div className='Contact'>
      <Glassmorph
        uri={
          "https://b.zmtcdn.com/data/zomaland/c94a1e779c5f3126720dcfb0c6a8dad81733740463.png"
        }
      />


      <Container maxWidth="lg">


        <Box sx={{ background: "black", borderRadius: 2, marginBlock: 4, minHeight: "70vh", padding: 6 }}>

          <h2>Contact Us</h2>

          <Box sx={{ paddingBlock: 1 }}>
            <Typo_Basefont text='Have any query! feel free to contact us' fc='#787878' fs='1.8rem' />
          </Box>
          <p>---------------------------------------------------------------------------------------</p>

          <Box sx={{padding: 2}}></Box>

          <Box sx={{ paddingBlock: 1 }}>
            <Typo_Basefont text='dunesofcosmos@gmail.com, thekahanikaars@gmail.com' fc='#eeeeee' fs='1.8rem' />
          </Box>
          <Box sx={{ paddingBlock: 1 }}>
            <Typo_Basefont text='DOC office, near dainik bhaskar office, panchsheel road, vaishali nagar, Ajmer' fc='#eeeeee' fs='1.8rem' />
          </Box>
          <Box sx={{ paddingBlock: 1 }}>
            <Typo_Smallfont text='+91-9636074720, +91-8824627181, +91-7296840137, +91-8233345554'  fc='#eeeeee' fs='1.8rem' />
          </Box>

        </Box>


      </Container>

    </div>
  )
}

export default Contact