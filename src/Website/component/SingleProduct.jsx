import React, { useState } from 'react';
import {
    Box,
    Grid,
    IconButton,
    Button,
    Typography,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
    Chip,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Badge,
    Tooltip,
    Tabs,
    Tab,
    Rating,
    Container,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    ExpandMore as ExpandMoreIcon,
    FavoriteBorder as FavoriteBorderIcon,
    Favorite as FavoriteIcon,
    Share as ShareIcon,
    CompareArrows as CompareArrowsIcon,
    ShoppingCart as ShoppingCartIcon,
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon,
    CopyAll as CopyIcon,
    Check as CheckIcon,
    Facebook,
    Twitter,
    LinkedIn,
    WhatsApp,
    Email
} from '@mui/icons-material';


const SingleProduct = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [expanded, setExpanded] = useState('specs');
    const [wishlisted, setWishlisted] = useState(false);
    const [copiedCode, setCopiedCode] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState({ title: '', content: '' });
    const [shareOpen, setShareOpen] = useState(false);
    const [similarOpen, setSimilarOpen] = useState(false);
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const product = {
        id: 'plpewjl0072203',
        name: 'Police Automatic With Self Winding Brown Dial Stainless Steel Strap Watch For Men',
        brand: 'Police',
        price: 27795,
        mrp: 27795,
        tag: 'New Arrival',
        rating: 4.5,
        reviews: 24,
        images: [
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0f0b7dee/images/Helios/Catalog/PLPEWJL0072203_1.jpg',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1e6caf34/images/Helios/Catalog/PLPEWJL0072203_2.jpg',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9811d7a4/images/Helios/Catalog/PLPEWJL0072203_3.jpg',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwee091b83/images/Helios/Catalog/PLPEWJL0072203_4.jpg'
        ],
        similarProducts: [
            { id: '1', name: 'Police Chronograph Black Dial', price: 17995, image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0f0b7dee/images/Helios/Catalog/PLPEWJL0072203_1.jpg' },
            { id: '2', name: 'Police Blue Dial Leather Strap', price: 15995, image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1e6caf34/images/Helios/Catalog/PLPEWJL0072203_2.jpg' },
            { id: '3', name: 'Police Silver Dial Metal Bracelet', price: 20995, image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9811d7a4/images/Helios/Catalog/PLPEWJL0072203_3.jpg' }
        ],
        specs: [
            { name: 'Display Brand', value: 'Police' },
            { name: 'Gender', value: 'Men' },
            { name: 'Glass Material', value: 'Mineral Glass' },
            { name: 'Warranty Period', value: '24 Months' },
            { name: 'Strap Material', value: 'Stainless Steel' },
            { name: 'Strap Color', value: 'Rose Gold' },
            { name: 'Function', value: 'Automatic With Self Winding' },
            { name: 'Movement', value: 'Automatic With Self Winding' },
            { name: 'Dial Color', value: 'Brown' },
            { name: 'Case Shape', value: 'Special' },
            { name: 'Case Material', value: 'Stainless Steel' },
            { name: 'Case Length', value: '42 mm' },
            { name: 'Case Thickness', value: '14 mm' }
        ],
        moreInfo: {
            manufacturer: 'Titan Company Limited, #3, SIPCOT Industrial Complex, Hosur - 635126, Tamil Nadu',
            origin: 'India',
            quantity: '1N'
        },
        offers: [
            {
                code: 'HELLO',
                description: 'Get 10% OFF* on Non discounted Over Rs. 9999. Maximum Discount: Rs.1500.',
                terms: [
                    'Use Code HELLO and get Rs. 10% OFF* on Watches over Rs. 9999. Maximum discount Rs. 1500.',
                    'The coupon will be valid till 31-Mar-26.',
                    'The coupon is applicable on non-discounted items.'
                ]
            },
            {
                code: 'NEW10',
                description: 'Get 10% OFF* on Non discounted Over Rs. 2499. Maximum Discount: Rs.1200.',
                terms: [
                    'Use Code NEW10 and get 10% OFF* on Non discounted Watches over Rs. 2499.',
                    'Maximum Discount: Rs.1200.',
                    'The coupon will be valid till 31-Mar-26.'
                ]
            }
        ],
        usps: [
            { icon: 'warranty', text: '24 Months Warranty' },
            { icon: 'shipping', text: 'Free Shipping Countrywide' },
            { icon: 'return', text: 'Easy Return' },
            { icon: 'pod', text: 'Pay on Delivery Available' },
            { icon: 'service', text: 'Serviced Across India' }
        ]
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : product.images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev => (prev < product.images.length - 1 ? prev + 1 : 0));
    };

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(''), 2000);
    };

    const openTermsDialog = (title, content) => {
        setDialogContent({ title, content });
        setOpenDialog(true);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleGoToCart = () => {
        window.location.href = "/cart"
    }

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{
                display: 'flex',
                // p: 2,
                gap: 4,
                width: '100%',
                // alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: isMobile ? 'column' : 'row',
            }}>
                {/* Product Images */}
                <Box >
                    <Box sx={{
                        width: '100%',
                        position: 'relative'
                    }}>
                        {/* Main Image */}
                        <Box sx={{
                            width: '100%',
                            height: isMobile ? '300px' : '400px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mb: 2,
                            backgroundColor: '#f5f5f5',
                            borderRadius: 1
                        }}>
                            <Box
                                component="img"
                                src={`${product.images[currentImageIndex]}?sw=600&sh=600`}
                                alt={product.name}
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>

                        {/* Navigation Arrows */}
                        <IconButton
                            onClick={handlePrevImage}
                            sx={{
                                position: 'absolute',
                                left: 10,
                                top: '50%',
                                backgroundColor: 'rgba(70, 65, 65, 0.7)',
                                '&:hover': { backgroundColor: 'rgba(49, 44, 44, 0.9)' }
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleNextImage}
                            sx={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                backgroundColor: 'rgba(70, 65, 65, 0.7)',
                                '&:hover': { backgroundColor: 'rgba(49, 44, 44, 0.9)' }
                            }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>

                        {/* Thumbnails */}
                        <Box sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: 1,
                            py: 1
                        }}>
                            {product.images.map((img, index) => (
                                <Paper
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    elevation={index === currentImageIndex ? 3 : 1}
                                    sx={{
                                        minWidth: 60,
                                        height: 60,
                                        cursor: 'pointer',
                                        border: index === currentImageIndex ? '2px solid' : 'none',
                                        borderColor: index === currentImageIndex ? 'primary.main' : 'transparent',
                                        overflow: 'hidden',
                                        flexShrink: 0
                                    }}
                                >
                                    <img
                                        src={`${img}?sw=60&sh=60`}
                                        alt={`Product view ${index + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Paper>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Product Details */}
                <Box sx={{
                    width: isMobile ? '100%' : '60%',
                    height: isMobile ? 'auto' : 'calc(100vh - 150px)',
                    overflowY: 'auto',
                    pr: 1,
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#888',
                        borderRadius: '10px',
                    }
                }
                }  >
                    {/* Brand and Tag */}
                    < Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Chip label={product.tag} color="primary" size="small" sx={{ mr: 1 }} />
                            <Typography variant="subtitle1" color="text.secondary">
                                {product.brand}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating value={product.rating} precision={0.5} size="small" readOnly />
                            <Typography variant="caption" sx={{ ml: 0.5 }}>
                                ({product.reviews} reviews)
                            </Typography>
                        </Box>
                    </Box>

                    {/* Product Name */}
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                    >
                        {product.name}
                    </Typography>

                    {/* Product ID */}
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Product ID: {product.id}
                    </Typography>

                    {/* Price */}
                    <Box sx={{ my: 3 }}>
                        <Typography variant="h5" component="span" sx={{ fontWeight: 'bold' }}>
                            {formatPrice(product.price)}
                        </Typography>
                        <Typography variant="body2" component="span" sx={{ ml: 1, color: 'text.secondary' }}>
                            Inclusive of all taxes
                        </Typography>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: isMobile ? 'column' : 'row' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            // startIcon={<ShoppingCartIcon />}
                            sx={{ flex: 1, fontWeight: 800 }}
                            onClick={handleGoToCart}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            // startIcon={<CompareArrowsIcon />}
                            sx={{ flex: 1, fontWeight: 800 }}
                        >
                            Buy Now
                        </Button>
                    </Box>

                    {/* Secondary Actions */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3, maxWidth: '100%' }}>
                        <IconButton onClick={() => setWishlisted(!wishlisted)}>
                            {wishlisted ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                Wishlist
                            </Typography>
                        </IconButton>

                        <IconButton onClick={() => setSimilarOpen(true)}>
                            <Badge badgeContent={product.similarProducts.length} color="primary">
                                <CompareArrowsIcon />
                            </Badge>
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                Similar
                            </Typography>
                        </IconButton>

                        <IconButton onClick={() => setShareOpen(true)}>
                            <ShareIcon />
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                Share
                            </Typography>
                        </IconButton>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {/* Delivery Check */}
                    <Paper sx={{ p: 2, mb: 3, maxWidth: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src="/delivery-icon.png" sx={{ mr: 2 }} />
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle2">Check Delivery Availability</Typography>
                                <Typography variant="body2">Dispatch By 21 Jun, Saturday</Typography>
                                <Typography variant="caption">
                                    If ordered within <span style={{ fontWeight: 'bold' }}>19 mins 20 secs</span>
                                </Typography>
                            </Box>
                            <ArrowForwardIcon />
                        </Box>
                    </Paper>

                    {/* USPs */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 3 }}>
                        {product.usps.map((usp, index) => (
                            <Box key={index} sx={{ textAlign: 'center', width: { xs: '50%', sm: '20%' }, mb: 2 }}>
                                <Avatar src={`/${usp.icon}-icon.png`} sx={{ width: 40, height: 40, mx: 'auto' }} />
                                <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                                    {usp.text}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Offers */}
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Available Offers
                        </Typography>

                        {product.offers.map((offer, index) => (
                            <Paper key={index} sx={{ p: 2, mb: 2 }}>
                                <Typography variant="body2" gutterBottom>
                                    {offer.description}
                                    <Button
                                        size="small"
                                        sx={{ ml: 1 }}
                                        onClick={() => openTermsDialog(`Terms for ${offer.code}`, offer.terms)}
                                    >
                                        T&amp;C
                                    </Button>
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Chip label={offer.code} sx={{ mr: 1 }} />
                                    <Tooltip title={copiedCode === offer.code ? 'Copied!' : 'Copy code'}>
                                        <IconButton size="small" onClick={() => copyToClipboard(offer.code)}>
                                            {copiedCode === offer.code ? <CheckIcon color="success" /> : <CopyIcon />}
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Paper>
                        ))}

                        <Button variant="text" endIcon={<ExpandMoreIcon />} sx={{ mt: 1 }}>
                            +3 More Offers
                        </Button>
                    </Box>

                    {/* Product Details Tabs */}
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tabValue} onChange={handleTabChange}>
                            <Tab label="Description" />
                            <Tab label="Specifications" />
                            <Tab label="Reviews" />
                        </Tabs>
                    </Box>
                    <Box sx={{ p: 2 }}>
                        {tabValue === 0 && (
                            <Typography>
                                This Police automatic watch features a self-winding mechanism with a brown dial and stainless steel strap.
                                The watch combines rugged style with precision engineering for a sophisticated look.
                            </Typography>
                        )}
                        {tabValue === 1 && (
                            <Accordion expanded={expanded === 'specs'} onChange={handleAccordionChange('specs')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>Product Specifications</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        {product.specs.map((spec, index) => (
                                            <Grid item xs={6} key={index}>
                                                <Typography variant="subtitle2" color="text.secondary">
                                                    {spec.name}
                                                </Typography>
                                                <Typography variant="body2">{spec.value}</Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        )}
                        {tabValue === 2 && (
                            <Typography>No reviews yet. Be the first to review this product!</Typography>
                        )}
                    </Box>

                </Box>
            </Box>

            {/* Share Dialog */}
            <Dialog open={shareOpen} onClose={() => setShareOpen(false)}>
                <DialogTitle>Share this product</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 2 }}>
                        <IconButton color="primary" size="large">
                            <Facebook fontSize="large" />
                        </IconButton>
                        <IconButton color="info" size="large">
                            <Twitter fontSize="large" />
                        </IconButton>
                        <IconButton color="primary" size="large">
                            <LinkedIn fontSize="large" />
                        </IconButton>
                        <IconButton color="success" size="large">
                            <WhatsApp fontSize="large" />
                        </IconButton>
                        <IconButton color="secondary" size="large">
                            <Email fontSize="large" />
                        </IconButton>
                    </Box>
                    <TextField
                        fullWidth
                        variant="outlined"
                        // value={`https://example.com/products/${product.id}`}
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{ mt: 2 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShareOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Similar Products Dialog */}
            <Dialog
                open={similarOpen}
                onClose={() => setSimilarOpen(false)}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>Similar Products</DialogTitle>
                <DialogContent>
                    <List>
                        {product.similarProducts.map(item => (
                            <ListItem key={item.id} sx={{ py: 2 }}>
                                <ListItemIcon sx={{ mr: 2 }}>
                                    <Avatar
                                        src={`${item.image}?sw=80&sh=80`}
                                        alt={item.name}
                                        sx={{ width: 80, height: 80 }}
                                        variant="square"
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.name}
                                    secondary={formatPrice(item.price)}
                                    primaryTypographyProps={{ variant: 'subtitle1' }}
                                    secondaryTypographyProps={{ variant: 'h6' }}
                                />
                                <Button variant="outlined" sx={{ ml: 2 }}>
                                    View
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSimilarOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Terms Dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>{dialogContent.title}</DialogTitle>
                <DialogContent>
                    <List>
                        {dialogContent.content && dialogContent.content.map((term, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>•</ListItemIcon>
                                <ListItemText primary={term} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>

        </Container >
    );
};

export default SingleProduct;