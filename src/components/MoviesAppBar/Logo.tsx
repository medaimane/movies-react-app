import React from 'react';
import {Typography} from '@mui/material';
import {local} from '../../localization/local';

export function Logo() {
  return (
    <Typography variant="h6" noWrap component="div" sx={{display: 'block'}}>
      {local.logo}
    </Typography>
  );
}
