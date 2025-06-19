import React, { useState } from 'react';
import {
    Container,
    Grid,
    Typography,
    Button,
    Divider,
    Paper,
    Box,
    Chip,
    Avatar,
    IconButton,
    Checkbox,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Badge,
    Tabs,
    Tab
} from '@mui/material';
import {
    FavoriteBorder,
    Delete,
    ArrowForward,
    Close,
    Add,
    Remove,
    ExpandMore,
    Check,
    LocalShipping,
    CardGiftcard
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = [
        {
            id: 'plpewjl0072203',
            name: 'Police Automatic With Self Winding Brown Dial Stainless Steel Strap Watch For Men',
            brand: 'Police',
            price: 27795,
            image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0f0b7dee/images/Helios/Catalog/PLPEWJL0072203_1.jpg',
            color: 'Brown',
            quantity: 1,
            maxQuantity: 9,
            deliveryDate: '21 Jun, Saturday',
            returnPolicy: '7 Days Return'
        }
    ];

    const offers = [
        {
            title: 'Get 10% Cashback* up to ₹2000 with Snapmint',
            terms: [
                'Offer valid from 7th June 2025 to 22nd June 2025',
                'Maximum 10% Cashback Up to ₹2000',
                'Valid only for first transactions through Snapmint'
            ]
        },
        {
            title: 'Flat ₹300 Cashback with Simpl',
            terms: [
                'Minimum order value ₹3499',
                'Valid once per user during offer period'
            ]
        }
    ];

    const [selectedItems, setSelectedItems] = useState([cartItems[0].id]);
    const [quantity, setQuantity] = useState(1);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openOfferDialog, setOpenOfferDialog] = useState(false);
    const [currentOffer, setCurrentOffer] = useState(null);

    const handleSelectItem = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cartItems.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cartItems.map(item => item.id));
        }
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= cartItems[0].maxQuantity) {
            setQuantity(newQuantity);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleOpenOfferTerms = (offer) => {
        setCurrentOffer(offer);
        setOpenOfferDialog(true);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{
                display: 'flex',
                p: 2,
                gap: 2,
                width: '100%',
                alignItems: 'flex-start'
            }}>
                {/* Left Column - Cart Items */}
                <Box sx={{
                    flex: 2,
                    minWidth: 0
                }}>
                    {/* Cart Header */}
                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box display="flex" alignItems="center">
                                <Checkbox
                                    checked={selectedItems.length === cartItems.length}
                                    onChange={handleSelectAll}
                                />
                                <Typography variant="body1">
                                    {selectedItems.length}/{cartItems.length} Item selected
                                </Typography>
                                <Typography variant="body1" sx={{ ml: 1, fontWeight: 'bold' }}>
                                    ({formatPrice(selectedItems.length * cartItems[0].price)})
                                </Typography>
                            </Box>
                            <Box>
                                <Button startIcon={<FavoriteBorder />} sx={{ mr: 2 }}>
                                    Move to wishlist
                                </Button>
                                <Button startIcon={<Delete />} color="error" onClick={() => setOpenDeleteDialog(true)}>
                                    Delete
                                </Button>
                            </Box>
                        </Box>
                    </Paper>

                    {/* Cart Items */}
                    {cartItems.map(item => (
                        <Paper key={item.id} sx={{ mb: 3 }}>
                            <Box sx={{
                                display: 'flex',
                                p: 2,
                                gap: 2,
                                width: '100%',
                                alignItems: 'flex-start'
                            }}>
                                {/* Image Section - Fixed width */}
                                <Box sx={{
                                    position: 'relative',
                                    flexShrink: 0,
                                    width: { xs: '30%', sm: '25%' },
                                }}>
                                    <Checkbox
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleSelectItem(item.id)}
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 1,
                                            top: -8,
                                            left: -8,
                                            padding: 0
                                        }}
                                    />
                                    <Link to={'/single_product'}>
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.name}
                                            sx={{
                                                width: '100%',
                                                height: 200,
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </Link>
                                </Box>

                                {/* Content Section - Flexible width */}
                                <Box sx={{
                                    flexGrow: 1,
                                    minWidth: 0
                                }}>
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {item.brand}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 1 }} >
                                        {item.name}
                                    </Typography>

                                    <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 2 }}>
                                            {formatPrice(item.price)}
                                        </Typography>
                                        <Box display="flex" alignItems="center">
                                            <IconButton
                                                size="small"
                                                onClick={() => handleQuantityChange(quantity - 1)}
                                                disabled={quantity <= 1}
                                            >
                                                <Remove fontSize="small" />
                                            </IconButton>
                                            <TextField
                                                value={quantity}
                                                size="small"
                                                sx={{ width: 60, mx: 1 }}
                                                inputProps={{
                                                    style: { textAlign: 'center' },
                                                    min: 1,
                                                    max: item.maxQuantity
                                                }}
                                                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                                            />
                                            <IconButton
                                                size="small"
                                                onClick={() => handleQuantityChange(quantity + 1)}
                                                disabled={quantity >= item.maxQuantity}
                                            >
                                                <Add fontSize="small" />
                                            </IconButton>
                                        </Box>
                                    </Box>

                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        Color: {item.color}
                                    </Typography>

                                    <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                                        <Avatar src="/return-icon.svg" sx={{ width: 24, height: 24, mr: 1 }} />
                                        <Typography variant="body2">{item.returnPolicy}</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Avatar src="/delivery-icon.svg" sx={{ width: 24, height: 24, mr: 1 }} />
                                        <Typography variant="body2">
                                            Dispatch by {item.deliveryDate}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    ))}

                    {/* Available Offers */}
                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                            <Avatar src="/offer-icon.svg" sx={{ width: 24, height: 24, mr: 1 }} />
                            Available Offers
                        </Typography>

                        <List>
                            {offers.map((offer, index) => (
                                <ListItem key={index} sx={{ borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
                                    <ListItemText
                                        primary={offer.title}
                                        primaryTypographyProps={{ variant: 'body2' }}
                                    />
                                    <Button
                                        size="small"
                                        onClick={() => handleOpenOfferTerms(offer)}
                                    >
                                        T&amp;C
                                    </Button>
                                </ListItem>
                            ))}
                        </List>

                        <Button fullWidth endIcon={<ExpandMore />}>
                            See More Offers
                        </Button>
                    </Paper>
                </Box>

                {/* Right Column - Order Summary */}
                <Box sx={{
                    flex: 1,
                    position: { md: 'sticky' },
                    top: { md: 20 },
                    width: '100%',
                    minWidth: 0
                }}>
                    {/* Delivery Check */}
                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Check Delivery Availability
                        </Typography>
                        <Button
                            variant="outlined"
                            fullWidth
                            endIcon={<ArrowForward />}
                        >
                            Enter Pincode
                        </Button>
                    </Paper>

                    {/* Coupon Section */}
                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Apply Coupon
                        </Typography>
                        <Box display="flex">
                            <TextField
                                placeholder="Enter Coupon Code"
                                fullWidth
                                size="small"
                                sx={{ mr: 1 }}
                            />
                            <Button variant="contained">Apply</Button>
                        </Box>
                    </Paper>

                    {/* Order Summary */}
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Order Summary
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                            <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
                                <Typography variant="body2">Order Value</Typography>
                                <Typography variant="body2">{formatPrice(27795)}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
                                <Typography variant="body2">Shipping</Typography>
                                <Typography variant="body2">Free</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
                                <Typography variant="body2">Coupon Discount</Typography>
                                <Typography variant="body2" color="error">
                                    - {formatPrice(1500)}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box display="flex" justifyContent="space-between" sx={{ mb: 3 }}>
                            <Typography variant="h6">Grand Total</Typography>
                            <Typography variant="h6">{formatPrice(26295)}</Typography>
                        </Box>

                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{ mb: 2 }}
                        >
                            Proceed to checkout
                        </Button>

                        <Typography variant="body2" textAlign="center">
                            Your order is eligible for <span style={{ fontWeight: 'bold' }}>Free Shipping!</span>
                        </Typography>
                    </Paper>
                </Box>
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
                <DialogTitle>Remove Item</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to remove this item from the cart?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
                    <Button
                        color="error"
                        onClick={() => {
                            setOpenDeleteDialog(false);
                            // Handle delete logic here
                        }}
                    >
                        Remove
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setOpenDeleteDialog(false);
                            // Handle move to wishlist logic here
                        }}
                    >
                        Move to Wishlist
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Offer Terms Dialog */}
            <Dialog open={openOfferDialog} onClose={() => setOpenOfferDialog(false)}>
                <DialogTitle>Terms and Conditions</DialogTitle>
                <DialogContent>
                    {currentOffer && (
                        <>
                            <Typography variant="h6" sx={{ mb: 2 }}>{currentOffer.title}</Typography>
                            <List>
                                {currentOffer.terms.map((term, index) => (
                                    <ListItem key={index} sx={{ py: 0 }}>
                                        <ListItemText primary={`• ${term}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenOfferDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Cart;