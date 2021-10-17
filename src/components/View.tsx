import {styled} from '@mui/material/styles';
import {Box} from '@mui/system';
import {Colors} from '../theme/Colors';

export const View = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.black,
  padding: theme.spacing(8, 0),
}));
