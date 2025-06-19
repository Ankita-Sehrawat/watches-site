import React, { useState } from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Box,
    Button,
    Container,
    CardActions
} from '@mui/material';
import {
    FavoriteBorder as FavoriteBorderIcon,
    Favorite as FavoriteIcon,
    ShoppingCart
} from '@mui/icons-material';

const Products = () => {
    const products = [
        {
            id: 'p1',
            brand: 'Police',
            model: "Men's Watch",
            description: "Police Quartz Analog Block Dial Blue...",
            price: 19495,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360"
        },
        {
            id: 'p2',
            brand: 'Kenneth Cole',
            model: "Women's Watch",
            description: "Kenneth Cole Quartz Analog Silver Dial...",
            price: 19495,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw275cf03c/images/Titan/Catalog/90196AM01_7.jpg?sw=360&sh=360"
        },
        {
            id: 'p3',
            brand: 'Kenneth Cole',
            model: "Men's Watch",
            description: "Kenneth Cole Quartz Multifunction...",
            price: 20995,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc62e7d9b/images/Titan/Catalog/90196AM01_5.jpg?sw=360&sh=360"
        },
        {
            id: 'p4',
            brand: 'Fossil',
            model: "Men's Watch",
            description: "Fossil Chronograph Black Dial...",
            price: 15995,
            originalPrice: 19995,
            discount: 20,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360"
        },
        {
            id: 'p5',
            brand: 'Casio',
            model: "Unisex Watch",
            description: "Casio Digital Black Resin Strap...",
            price: 4995,
            originalPrice: 5995,
            discount: 17,
            image: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
            id: 'p6',
            brand: 'Timex',
            model: "Women's Watch",
            description: "Timex Analog Rose Gold-Tone...",
            price: 8995,
            originalPrice: 10995,
            discount: 18,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360"
        },
        {
            id: 'p3',
            brand: 'Kenneth Cole',
            model: "Men's Watch",
            description: "Kenneth Cole Quartz Multifunction...",
            price: 20995,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc62e7d9b/images/Titan/Catalog/90196AM01_5.jpg?sw=360&sh=360"
        },
        {
            id: 'p6',
            brand: 'Timex',
            model: "Women's Watch",
            description: "Timex Analog Rose Gold-Tone...",
            price: 8995,
            originalPrice: 10995,
            discount: 18,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360"
        },
    ];

    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (productId) => {
        if (wishlist.includes(productId)) {
            setWishlist(wishlist.filter(id => id !== productId));
        } else {
            setWishlist([...wishlist, productId]);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography variant="h4" component="h2" sx={{
                textAlign: 'center',
                mb: 4,
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }}>
                All Products
            </Typography>

            <Grid container spacing={4} style={{ justifyContent: 'center' }}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}  >
                        <Card sx={{ width: 300, height: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 2, boxShadow: 3, position: 'relative', ":hover": { boxShadow: '2px 2px 15px rgb(179, 174, 174)' } }} >
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <IconButton
                                    onClick={() => toggleWishlist(item.id)}
                                // sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1 }}
                                >
                                    {wishlist.includes(item.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </div>

                            {/* Discount Badge */}
                            {item.discount && (
                                <Box sx={{
                                    position: 'absolute',
                                    top: 20,
                                    left: 8,
                                    backgroundColor: 'red',
                                    color: 'white',
                                    borderRadius: '4px',
                                    px: 1,
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}>
                                    {item.discount}% OFF
                                </Box>
                            )}

                            <Box sx={{ overflow: 'hidden', }}>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={item.image}
                                    alt={item.description}
                                    sx={{ objectFit: 'cover', ":hover": { transform: 'scale(1.05)' } }}
                                />
                            </Box>

                            <CardContent sx={{ textAlign: 'center', padding: 1 }}>
                                <Typography variant="body1" fontWeight="bold" noWrap>
                                    {item.description}
                                </Typography>

                                {/* Prices */}
                                <Box>
                                    {item.originalPrice && (
                                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                                            {formatPrice(item.originalPrice)}
                                        </Typography>
                                    )}
                                    <Typography variant="body1" fontWeight="bold" color="primary">
                                        {formatPrice(item.price)}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;