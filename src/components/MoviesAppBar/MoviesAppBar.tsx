import React, {useState} from 'react';
import {AppBar, Box, Toolbar} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  FavoriteBorder as FavoriteIcon,
} from '@mui/icons-material';
import {Logo} from './Logo';
import {SearchInput} from './SearchInput';
import {local} from '../../localization/local';
import {styled} from '@mui/material/styles';
import {Colors} from '../../theme/Colors';
import {MenuButton} from './MenuButton';
import {MoviePresentable} from '../../screens/home/MoviePresentable';
import {MoviesMenu} from './MoviesMenu';

interface Props {
  search: string;

  favoritesMovies: MoviePresentable[];
  watchLaterMovies: MoviePresentable[];

  onSearchInputChange: (text: string) => void;

  removeFromFavorites: (m: MoviePresentable) => void;
  removeFromWatchLater: (m: MoviePresentable) => void;
}

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: Colors.black,
}));

export function MoviesAppBar(props: Props) {
  const [favoritesMenuAnchorEl, setFavoritesMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const [watchLaterMenuAnchorEl, setWatchLaterMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const hasFavoritesMovies = props.favoritesMovies.length > 0;
  const hasWatchLaterMovies = props.watchLaterMovies.length > 0;

  const handleFavoritesMenuOpen = (e: HTMLElement) => {
    setFavoritesMenuAnchorEl(e);
  };
  const handleFavoritesMenuClose = () => {
    setFavoritesMenuAnchorEl(null);
  };

  const handleWatchLaterMenuOpen = (e: HTMLElement) => {
    setWatchLaterMenuAnchorEl(e);
  };
  const handleWatchLaterMenuClose = () => {
    setWatchLaterMenuAnchorEl(null);
  };

  const favoritesMenuId = 'primary-favorites-menu';
  const renderFavoritesMenu = (
    <MoviesMenu
      anchorEl={favoritesMenuAnchorEl}
      menuId={favoritesMenuId}
      movies={props.favoritesMovies}
      onClose={handleFavoritesMenuClose}
      onRemove={props.removeFromFavorites}
    />
  );

  const watchLaterMenuId = 'primary-watch-later-menu';
  const renderWatchLaterMenu = (
    <MoviesMenu
      anchorEl={watchLaterMenuAnchorEl}
      menuId={watchLaterMenuId}
      movies={props.watchLaterMovies}
      onClose={handleWatchLaterMenuClose}
      onRemove={props.removeFromWatchLater}
    />
  );

  return (
    <Box>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Logo />

          <EmptySeparator />

          <SearchInput
            value={props.search}
            onChange={props.onSearchInputChange}
          />

          <EmptySeparator />

          <Box sx={{display: 'flex'}}>
            <MenuButton
              hasBadge={hasFavoritesMovies}
              label={local.favorites}
              menuId={favoritesMenuId}
              onClick={handleFavoritesMenuOpen}
            >
              <FavoriteIcon />
            </MenuButton>

            <MenuButton
              hasBadge={hasWatchLaterMovies}
              label={local.watchLater}
              menuId={watchLaterMenuId}
              onClick={handleWatchLaterMenuOpen}
            >
              <AccessTimeIcon />
            </MenuButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      {hasFavoritesMovies && renderFavoritesMenu}
      {hasWatchLaterMovies && renderWatchLaterMenu}
    </Box>
  );
}

function EmptySeparator() {
  return <Box sx={{flexGrow: 1}} />;
}
