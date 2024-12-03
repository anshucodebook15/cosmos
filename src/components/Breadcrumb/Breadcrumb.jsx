
import React from 'react'
import './Breadcrumb.scss'

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Typo_Subtitle } from '../Typo/Typo';
import { Box } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Box sx={{ paddingLeft: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            <Typo_Subtitle text='Live' />
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            <Typo_Subtitle text='Event In Ajmer' />
          </Link>
          <Typography sx={{ color: 'text.primary' }}>
            <Typo_Subtitle text='Paradox & Milind' />
          </Typography>
        </Breadcrumbs>
      </Box>
    </div>
  );
}
