import React from 'react';
import {MoviePresentable} from '../../screens/home/MoviePresentable';
import {MenueWrapper} from './MenueWrapper';
import MovieMenuCard from './MovieMenuCard';

interface Props {
  anchorEl: HTMLElement | null;

  menuId: string;
  movies: MoviePresentable[];

  onClose: () => void;
  onRemove: (m: MoviePresentable) => void;
}

export function MoviesMenu(props: Props) {
  const isOpen = Boolean(props.anchorEl);

  const handleClose = () => {
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
        <MovieMenuCard
          movie={m}
          key={'MoviesMenuItem_' + idx}
          onRemove={() => props.onRemove(m)}
        />
      ))}
    </MenueWrapper>
  );
}
