import {styled} from '@mui/material/styles';
import {Colors} from '../theme/Colors';

export const View = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.background,
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
    width: 'auto',
  },
}));
