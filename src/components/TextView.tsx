import {Typography} from '@mui/material';
import {Colors} from '../theme/Colors';

interface Props {
  text: string;
}

export function TextView(props: Props) {
  return (
    <Typography sx={{color: Colors.white}} variant="h6" component="p">
      {props.text}
    </Typography>
  );
}
