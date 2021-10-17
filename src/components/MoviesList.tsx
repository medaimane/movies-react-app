import React from 'react';
import {IconButton, ImageListItemBar} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  FavoriteBorder as FavoriteIcon,
} from '@mui/icons-material';
import {MoviePresentable} from '../screens/home/MoviePresentable';
import {StyledImageListItem, StyledList} from './StyledList';

interface Props {
  movies: MoviePresentable[];
}

export function MoviesList(props: Props) {
  return (
    <StyledList>
      {props.movies.map((m, idx) => (
        <StyledImageListItem key={'MoviesListItem_' + idx}>
          <img
            width="700"
            src={`${m.poster}?w=300&fit=crop&auto=format`}
            srcSet={`${m.poster}?w=300&fit=crop&auto=format&dpr=2 2x`}
            alt={m.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            position="top"
            actionPosition="right"
            actionIcon={
              <>
                <IconButton
                  sx={{color: 'white'}}
                  aria-label={`FavoriteIcon ${m.title}`}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  sx={{color: 'white'}}
                  aria-label={`AccessTimeIcon ${m.title}`}
                >
                  <AccessTimeIcon />
                </IconButton>
              </>
            }
          />
          <ImageListItemBar title={m.title} subtitle={m.overview} />
        </StyledImageListItem>
      ))}
    </StyledList>
  );
}
