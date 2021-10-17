import React from 'react';
import {Typography} from '@mui/material';
import {local} from '../../localization/local';

export function Logo() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{display: {xs: 'none', sm: 'block'}}}
    >
      {local.logo}
    </Typography>
  );
}
