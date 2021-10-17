import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  BookmarkRemove as BookmarkRemoveIcon,
} from '@mui/icons-material';
import {MoviePresentable} from '../../screens/home/MoviePresentable';
import {Colors} from '../../theme/Colors';

interface Props {
  movie: MoviePresentable;

  onRemove: () => void;
}

export default function MovieMenuCard(props: Props) {
  return (
    <Card
      sx={{
        display: 'flex',
        flex: 1,
        margin: 2,
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column', flex: '1'}}>
        <CardContent sx={{flex: '1 0 auto'}}>
          <Typography component="div" variant="h5">
            {props.movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            {props.movie.overview.substring(0, 150) + '...'}
          </Typography>
        </CardContent>

        <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
          <IconButton
            aria-label="remove"
            sx={{color: Colors.black}}
            onClick={() => props.onRemove()}
          >
            <BookmarkRemoveIcon />
          </IconButton>
        </Box>
      </Box>

      <CardMedia
        component="img"
        sx={{width: 151}}
        image={props.movie.poster}
        alt={props.movie.title}
      />
    </Card>
  );
}
