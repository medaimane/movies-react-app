import React, {ReactNode} from 'react';
import {Menu} from '@mui/material';

interface Props {
  menuId: string;
  isOpen: boolean;
  children: ReactNode;

  anchorEl: HTMLElement | null;

  onClose: () => void;
}

export function MenueWrapper(props: Props) {
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={props.menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.isOpen}
      onClose={props.onClose}
    >
      {props.children}
    </Menu>
  );
}
