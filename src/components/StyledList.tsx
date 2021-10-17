import {ImageListItem, List} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Colors} from '../theme/Colors';

export const StyledList = styled(List)(({theme}) => ({
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%',
  height: '100%',
  backgroundColor: Colors.black,
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledImageListItem = styled(ImageListItem)(({theme}) => ({
  margin: theme.spacing(2, 2),
}));
