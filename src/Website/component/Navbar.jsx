import React, { useState } from 'react';
import { 
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  InputBase,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popover,
  Drawer,
  ListItemIcon,
  Collapse
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  Close as CloseIcon,
  AccountCircle as AccountIcon,
  FavoriteBorder as WishlistIcon,
  ShoppingCart as CartIcon,
  Room as StoreIcon,
  HelpOutline as HelpIcon,
  CardGiftcard as GiftCardIcon,
  LocalShipping as DeliveryIcon,
  ExpandMore,
  ExpandLess,
  Watch,
  Woman,
  Man,
  Devices,
  ChildFriendly,
  Diamond
} from '@mui/icons-material';
import { ThemeSelector, useTheme } from '../../ThemeContext';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});
  
  const categories = [
    {
      name: 'Men',
      icon: <Man />,
      subCategories: ['Watches', 'Wallets', 'Belts', 'Sunglasses']
    },
    {
      name: 'Women',
      icon: <Woman />,
      subCategories: ['Watches', 'Jewellery', 'Bags', 'Sunglasses']
    },
    {
      name: 'Smart Watches',
      icon: <Devices />,
      subCategories: ['Smart Hybrid', 'Connected', 'Fitness Trackers']
    },
    {
      name: 'Kids',
      icon: <ChildFriendly />,
      subCategories: ['Watches', 'Accessories']
    },
    {
      name: 'Premium',
      icon: <Diamond />,
      subCategories: ['Titan Edge', 'Titan Mechanical', 'Titan Automatic']
    }
  ];

  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCategoryToggle = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const { themeMode, toggleThemeMode } = useTheme();
    // const { theme, toggleTheme } = useTheme();

  return (
    <div className={`some-component ${themeMode}`}>
      <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'white' }}>
        {/* Top Bar */}
        <Container maxWidth="xl" disableGutters>
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Left side - Logo and Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleMobileMenu}
                sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              
              <Box component="a" href="/" sx={{ display: 'flex', mr: 2 }}>
                <img 
                  src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb6d5816b/images/homepage/titan-logo.svg" 
                  alt="Titan Logo" 
                  height="40"
                />
              </Box>
            </Box>
            
            {/* Middle - Search (desktop) */}
            <Box sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              maxWidth: 600,
              mx: 2
            }}>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  border: '1px solid #e0e0e0'
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="voice search">
                  <MicIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
            
            {/* Right side - Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Account */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="account-menu"
                  aria-haspopup="true"
                  onClick={handleAccountMenuOpen}
                  color="inherit"
                >
                  <AccountIcon />
                </IconButton>
                
                <Popover
                  id="account-menu"
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  sx={{ mt: 1 }}
                >
                  <Box sx={{ p: 2, width: 300 }}>
                    <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                      Welcome!
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      Enjoy A Personalized Timekeeping Experience.
                    </Typography>
                    <Button 
                      variant="contained" 
                      fullWidth
                      sx={{ 
                        bgcolor: '#832729',
                        '&:hover': { bgcolor: '#6a1f21' },
                        mb: 2
                      }}
                    >
                      LOGIN/SIGNUP
                    </Button>
                    
                    <List>
                      <ListItem button>
                        <ListItemText primary="Wishlist" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="eGift Cards" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Find A Store" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Help & Contact" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="FAQ" />
                      </ListItem>
                    </List>
                  </Box>
                </Popover>
              </Box>
              
              {/* Wishlist */}
              <IconButton
                size="large"
                aria-label="wishlist"
                color="inherit"
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Badge badgeContent={0} color="error">
                  <WishlistIcon />
                </Badge>
              </IconButton>
              
              {/* Cart */}
              <IconButton
                size="large"
                aria-label="cart"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <CartIcon />
                </Badge>
              </IconButton>
              
              {/* Track Order (desktop) */}
              {/* <Button
                startIcon={<StoreIcon />}
                sx={{ 
                  display: { xs: 'none', lg: 'flex' },
                  color: 'inherit',
                  textTransform: 'none'
                }}
              >
                Track Order
              </Button> */}
              
              {/* Mobile Search Toggle */}
              <IconButton
                size="large"
                aria-label="search"
                color="inherit"
                onClick={toggleMobileSearch}
                sx={{ display: { xs: 'flex', md: 'none' } }}
              >
                <SearchIcon />
              </IconButton>
               <ThemeSelector />
            </Box>
          </Toolbar>
          
          {/* Desktop Categories Bar */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            bgcolor: '#f5f5f5',
            px: 2,
            py: 1
          }}>
            {categories.map((category) => (
              <Box key={category.name} sx={{ position: 'relative', mr: 3 }}>
                <Button
                  endIcon={<ExpandMore />}
                  sx={{
                    color: 'text.primary',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'transparent'
                    }
                  }}
                  onMouseEnter={() => handleCategoryToggle(category.name)}
                  onMouseLeave={() => handleCategoryToggle(category.name)}
                >
                  {category.name}
                </Button>
                <Collapse 
                  in={openCategories[category.name]} 
                  timeout="auto" 
                  unmountOnExit
                  sx={{
                    position: 'absolute',
                    zIndex: 1,
                    width: 200,
                    left: 0,
                    top: '100%'
                  }}
                >
                  <Paper elevation={3} sx={{ mt: 1 }}>
                    <List>
                      {category.subCategories.map((subCategory) => (
                        <ListItem button key={subCategory}>
                          <ListItemText primary={subCategory} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Collapse>
              </Box>
            ))}
          </Box>
          
          {/* Mobile Search */}
          {mobileSearchOpen && (
            <Box sx={{ 
              p: 2,
              display: { xs: 'flex', md: 'none' },
              bgcolor: 'background.paper'
            }}>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="voice search">
                  <MicIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton 
                  color="inherit"
                  sx={{ p: '10px' }} 
                  onClick={toggleMobileSearch}
                >
                  <CloseIcon />
                </IconButton>
              </Paper>
            </Box>
          )}
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Categories
          </Typography>
          <List>
            {categories.map((category) => (
              <React.Fragment key={category.name}>
                <ListItem 
                  button 
                  onClick={() => handleCategoryToggle(category.name)}
                >
                  <ListItemIcon>
                    {category.icon}
                  </ListItemIcon>
                  <ListItemText primary={category.name} />
                  {openCategories[category.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openCategories[category.name]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {category.subCategories.map((subCategory) => (
                      <ListItem button key={subCategory} sx={{ pl: 4 }}>
                        <ListItemText primary={subCategory} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;