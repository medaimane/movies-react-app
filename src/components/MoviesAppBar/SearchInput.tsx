import React from 'react';
import {InputBase} from '@mui/material';
import {styled, alpha} from '@mui/material/styles';
import {Search as SearchIcon} from '@mui/icons-material';
import {local} from '../../localization/local';

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  paddingRight: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    width: 'auto',
  },
  [theme.breakpoints.up('xs')]: {
    paddingLeft: theme.spacing(1),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(2),
  },
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.up('xs')]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export function SearchInput(props: Props) {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        fullWidth={true}
        value={props.value}
        placeholder={local.search}
        inputProps={{'aria-label': local.search}}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </Search>
  );
}
