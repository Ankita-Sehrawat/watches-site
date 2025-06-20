import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Button, Box, Divider, IconButton, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const items = [
        {
            title: "MiniSPY Spy Detector for Type-c, Hidden Camera Detector, Mini Portable Anti Spy Detector Security Camera",
            imgSrc: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0f0b7dee/images/Helios/Catalog/PLPEWJL0072203_1.jpg",
            price: "₹ 1,499",
            oldPrice: "",
            discount: "",
            availability: "",
            // link: "/minispy-spy-detector-type-c-hidden-camera-detector-mini-portable-anti-security/p/itm2d96ef2354115?pid=HSAGYGFUWRZQZGHD"
        },
        {
            title: "Typography Women Round Neck Black T-Shirt",
            imgSrc: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1e6caf34/images/Helios/Catalog/PLPEWJL0072203_2.jpg',
            price: "₹262",
            oldPrice: "₹1,799",
            discount: "85% off",
            availability: "",
            // link: "/kotty-typography-women-round-neck-black-t-shirt/p/itm861108399b83e?pid=TSHGRCHZGJADGRAP"
        },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 500, mb: 3 }}>My Wishlist ({items.length} items)</Typography>

            <Box sx={{
                display: 'flex',
                p: 2,
                gap: 2,
                width: '100%',
                alignItems: 'flex-start'
            }}>
                {items.map((item, index) => (
                    <Box sx={{
                        width: '100%',
                    }} key={index}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 1px 1px 0 rgba(0,0,0,.1)',
                            borderRadius: '8px',
                            position: 'relative'
                        }}>
                            <Box sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}>
                                <IconButton aria-label="delete" size="small" sx={{ color:'red' }}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Box>

                            <CardMedia
                                component="img"
                                alt={item.title}
                                height="250"
                                image={item.imgSrc}
                                title={item.title}
                                sx={{
                                    objectFit: 'contain',
                                    p: 1,
                                    backgroundColor: '#f5f5f5'
                                }}
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 500,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        height: '3em'
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {item.availability ? (
                                    <Typography variant="body2" color="error" sx={{ mb: 1 }}>{item.availability}</Typography>
                                ) : (
                                    <Box sx={{ mb: 1 }}>
                                        <Typography variant="h6" component="span" sx={{ fontWeight: 500 }}>{item.price}</Typography>
                                        {item.oldPrice && (
                                            <>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    component="span"
                                                    sx={{ textDecoration: 'line-through', ml: 1 }}
                                                >
                                                    {item.oldPrice}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="success.main"
                                                    component="span"
                                                    sx={{ fontWeight: 500, ml: 1 }}
                                                >
                                                    {item.discount}
                                                </Typography>
                                            </>
                                        )}
                                    </Box>
                                )}
                            </CardContent>

                            <Box sx={{ p: 2, pt: 0 }}>
                                <Divider sx={{ mb: 2 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        href={item.link}
                                        target="_blank"
                                        sx={{
                                            textTransform: 'none',
                                            borderRadius: '2px',
                                            borderColor: '#e0e0e0',
                                            color: '#ffff'
                                        }}
                                    >
                                        View Product
                                    </Button>
                                    {!item.availability && (
                                        <Link to='/cart'>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                startIcon={<ShoppingCartIcon />}
                                                sx={{
                                                    textTransform: 'none',
                                                    borderRadius: '2px',
                                                    backgroundColor: '#fb641b',
                                                    '&:hover': {
                                                        backgroundColor: '#e05a14'
                                                    }
                                                }}
                                            >
                                                Add to Cart
                                            </Button>
                                        </Link>
                                    )}
                                </Box>
                            </Box>
                        </Card>
                    </Box>
                ))
                }
            </Box >
        </Container >
    );
};

export default Wishlist;