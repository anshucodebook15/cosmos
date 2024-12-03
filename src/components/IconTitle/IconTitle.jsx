
import React from 'react'
import './IconTitle.scss'
import { clock } from '../../assets'
import { Typo_Basefont, Typo_Smallfont, Typo_Subtitle } from '../Typo/Typo'
import { appcol } from '../../theme/apptheme'
import { Box } from '@mui/material'


const IconTitle = ({icon, text}) => {
  return (
    <div className='IconTitle'>
      <Box sx={{ marginBottom: 2 }}>

        <div className="flx aic">
          <Box sx={{ paddingRight: 2, }}>

            <img src={icon} alt="" className='iconwidth20' />
          </Box>
          <Typo_Basefont text={text} fc={appcol.font_col_dark_blue} fw='500' />
        </div>
      </Box>
    </div>
  )
}

export default IconTitle