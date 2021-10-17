import {MenuItem} from '@mui/material';
import React from 'react';
import {MoviePresentable} from '../../screens/home/MoviePresentable';
import {MenueWrapper} from './MenueWrapper';

interface Props {
  anchorEl: HTMLElement | null;

  menuId: string;
  movies: MoviePresentable[];

  onClose: () => void;
  onItemClick?: (m: MoviePresentable) => void;
}

export function MoviesMenu(props: Props) {
  const isOpen = Boolean(props.anchorEl);

  const handleClose = () => {
    props.onClose();
  };

  const handleItemClick = (m: MoviePresentable) => {
    props.onItemClick?.(m);

    props.onClose();
  };

  return (
    <MenueWrapper
      anchorEl={props.anchorEl}
      isOpen={isOpen}
      menuId={props.menuId}
      onClose={handleClose}
    >
      {props.movies.map((m, idx) => (
        <MenuItem
          key={'MoviesMenuItem_' + idx}
          onClick={() => handleItemClick(m)}
        >
          {m.title}
        </MenuItem>
      ))}
    </MenueWrapper>
  );
}
