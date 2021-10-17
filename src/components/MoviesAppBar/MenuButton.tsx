import React, {ReactNode} from 'react';
import {Badge, IconButton} from '@mui/material';

interface Props {
  label?: string;
  menuId?: string;
  hasBadge: boolean;
  children: ReactNode;
  onClick?: (e: HTMLElement) => void;
}

export function MenuButton(props: Props) {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label={props.label}
      aria-controls={props.menuId}
      aria-haspopup="true"
      onClick={(e) => props.onClick?.(e.currentTarget)}
      color="inherit"
    >
      <Badge
        variant="dot"
        color="error"
        overlap="circular"
        invisible={!props.hasBadge}
      >
        {props.children}
      </Badge>
    </IconButton>
  );
}
