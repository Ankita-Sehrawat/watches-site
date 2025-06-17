import React from 'react';
import { 
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Button
} from '@mui/material';
import {
  Search as SearchIcon,
  Mic as MicIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
  FavoriteBorder as FavoriteIcon,
  ShoppingCart as CartIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo */}
          <Box sx={{ flexGrow: { xs: 1, md: 0 }, mr: 2 }}>
            <img 
              src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb6d5816b/images/homepage/titan-logo.svg" 
              alt="Titan Logo" 
              style={{ height: '40px' }}
            />
          </Box>

          {/* Search Bar - Desktop */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            mx: 4,
            position: 'relative',
            borderRadius: '4px',
            bgcolor: 'rgba(0,0,0,0.05)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.08)' }
          }}>
            <InputBase
              placeholder="Search"
              sx={{
                width: '100%',
                pl: 2,
                pr: 6
              }}
            />
            <IconButton type="submit" sx={{ position: 'absolute', right: 0 }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ position: 'absolute', right: 40 }}>
              <MicIcon />
            </IconButton>
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {/* Account */}
            <IconButton onClick={handleMenuOpen} color="inherit">
              <PersonIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              sx={{ mt: '45px' }}
            >
              <MenuItem>
                <Typography textAlign="center">Login/Signup</Typography>
              </MenuItem>
              <MenuItem>Wishlist</MenuItem>
              <MenuItem>eGift Cards</MenuItem>
              <MenuItem>Find A Store</MenuItem>
              <MenuItem>Help & Contact</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </Menu>

            {/* Wishlist */}
            <IconButton color="inherit">
              <Badge badgeContent={0} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            {/* Cart */}
            <IconButton color="inherit">
              <Badge badgeContent={0} color="error">
                <CartIcon />
              </Badge>
            </IconButton>

            {/* Track Order - Desktop */}
            <Button 
              startIcon={<LocationIcon />} 
              sx={{ 
                display: { xs: 'none', lg: 'flex' },
                color: 'inherit',
                textTransform: 'none'
              }}
            >
              Track Order
            </Button>
          </Box>
        </Toolbar>

        {/* Search Bar - Mobile */}
        <Box sx={{ 
          display: { xs: 'flex', md: 'none' },
          pb: 2,
          position: 'relative',
          borderRadius: '4px',
          bgcolor: 'rgba(0,0,0,0.05)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.08)' }
        }}>
          <InputBase
            placeholder="Search"
            sx={{
              width: '100%',
              pl: 2,
              pr: 6
            }}
          />
          <IconButton type="submit" sx={{ position: 'absolute', right: 0 }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ position: 'absolute', right: 40 }}>
            <MicIcon />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;