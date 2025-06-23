import React, { useState } from 'react';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Button,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Divider,
    Slider
} from '@mui/material';
import {
    FavoriteBorder as FavoriteBorderIcon,
    Favorite as FavoriteIcon,
    ShoppingCart
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import FilterListIcon from "@mui/icons-material/FilterList";
import ClearIcon from "@mui/icons-material/Clear";

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
            id: 'p7',
            brand: 'Kenneth Cole',
            model: "Men's Watch",
            description: "Kenneth Cole Quartz Multifunction...",
            price: 20995,
            image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc62e7d9b/images/Titan/Catalog/90196AM01_5.jpg?sw=360&sh=360"
        },
        {
            id: 'p8',
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
    const [value, setValue] = useState([449, 550000]);
    const [minInput, setMinInput] = useState("449");
    const [maxInput, setMaxInput] = useState("550,000");

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        setMinInput(newValue[0].toString());
        setMaxInput(newValue[1].toLocaleString("en-IN"));
    };

    const handleMinInputChange = (event) => {
        const val = event.target.value.replace(/\D/g, "");
        setMinInput(val);
        if (val) {
            setValue([parseInt(val, 10), value[1]]);
        }
    };

    const handleMaxInputChange = (event) => {
        const val = event.target.value.replace(/\D/g, "");
        setMaxInput(val);
        if (val) {
            setValue([value[0], parseInt(val, 10)]);
        }
    };

    const handleBlur = () => {
        if (minInput && maxInput) {
            setValue([parseInt(minInput, 10), parseInt(maxInput.replace(/,/g, ""), 10)]);
        }
    };

    const formatValue = (value) => {
        return `₹ ${value.toLocaleString("en-IN")}`;
    };

    const handleClearAll = () => {
        setValue([449, 550000]);
        setMinInput("449");
        setMaxInput("550,000");
    };

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
                // textAlign: 'center',
                mb: 4,
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }}>
                All Products
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                {/* Filter Section - 20% width on desktop, full width on mobile */}
                <Box sx={{
                    width: { xs: '100%', md: '25%' },
                    flexShrink: 0
                }}>
                    <Box sx={{
                        position: { md: 'sticky' },
                        top: 16,
                        backgroundColor: 'background.paper',
                        borderRadius: 1,
                        p: 2,
                        boxShadow: 1
                    }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FilterListIcon sx={{ mr: 1 }} />
                                <Typography variant="subtitle1">Filter By</Typography>
                            </Box>
                            <Button
                                startIcon={<ClearIcon />}
                                onClick={handleClearAll}
                                disabled={value[0] === 449 && value[1] === 550000}
                                size="small"
                            >
                                Clear All
                            </Button>
                        </Box>

                        <Accordion defaultExpanded sx={{ boxShadow: 'none' }}>
                            <AccordionSummary>
                                <Typography>Price</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    Use Slider Or Enter Min & Max Price
                                </Typography>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: 3,
                                        gap: 1
                                    }}
                                >
                                    <TextField
                                        label="Min"
                                        variant="outlined"
                                        size="small"
                                        value={minInput}
                                        onChange={handleMinInputChange}
                                        onBlur={handleBlur}
                                        InputProps={{
                                            startAdornment: (
                                                <Typography variant="body2" sx={{ mr: 1 }}>
                                                    ₹
                                                </Typography>
                                            )
                                        }}
                                        fullWidth
                                    />
                                    <Typography variant="body2">To</Typography>
                                    <TextField
                                        label="Max"
                                        variant="outlined"
                                        size="small"
                                        value={maxInput}
                                        onChange={handleMaxInputChange}
                                        onBlur={handleBlur}
                                        InputProps={{
                                            startAdornment: (
                                                <Typography variant="body2" sx={{ mr: 1 }}>
                                                    ₹
                                                </Typography>
                                            )
                                        }}
                                        fullWidth
                                    />
                                </Box>

                                <Slider
                                    value={value}
                                    onChange={handleSliderChange}
                                    valueLabelDisplay="auto"
                                    min={449}
                                    max={550000}
                                    valueLabelFormat={formatValue}
                                    sx={{ mb: 2 }}
                                />

                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => console.log("Filter applied", value)}
                                >
                                    Apply Filter
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>

                {/* Products Section - 80% width on desktop, full width on mobile */}
                <Box sx={{
                    flexGrow: 1,
                    width: { xs: '100%', md: '75%' }
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: { xs: 'center', sm: 'flex-start' }
                    }}>
                        {products.map((item) => (
                            <Card key={item.id} sx={{
                                width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.33% - 16px)', lg: 'calc(25% - 18px)' },
                                // maxWidth: 300,
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 2,
                                position: 'relative',
                                boxShadow: 'none',
                                padding: 0,
                                backgroundColor: 'transparent',
                                ":hover": {
                                    boxShadow: 6,
                                    transform: 'translateY(-4px)',
                                    transition: 'all 0.3s ease'
                                }
                            }}>
                                <Box sx={{ position: 'relative' }}>
                                    {/* Wishlist Button */}
                                    <IconButton
                                        onClick={() => toggleWishlist(item.id)}
                                        sx={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            zIndex: 1,
                                            backgroundColor: 'rgba(75, 72, 72, 0.9)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(44, 39, 39, 0.9)'
                                            }
                                        }}
                                    >
                                        {wishlist.includes(item.id) ?
                                            <FavoriteIcon color="error" /> :
                                            <FavoriteBorderIcon />}
                                    </IconButton>

                                    {/* Discount Badge */}
                                    {item.discount && (
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 8,
                                            left: 8,
                                            backgroundColor: 'error.main',
                                            color: 'white',
                                            borderRadius: '4px',
                                            px: 1,
                                            py: 0.5,
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            zIndex: 1
                                        }}>
                                            {item.discount}% OFF
                                        </Box>
                                    )}

                                    <Link to='single_product' style={{ textDecoration: 'none' }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={item.image}
                                            alt={item.description}
                                            sx={{
                                                objectFit: 'cover',
                                                // p: 1,
                                                // backgroundColor: 'background.paper'
                                            }}
                                        />
                                    </Link>
                                </Box>

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="body1" fontWeight="bold" noWrap>
                                        {item.brand}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                        {item.description}
                                    </Typography>

                                    {/* Prices */}
                                    <Box sx={{ mt: 1 }}>
                                        {item.originalPrice && (
                                            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                                                {formatPrice(item.originalPrice)}
                                            </Typography>
                                        )}
                                        <Typography variant="h6" fontWeight="bold" color="primary">
                                            {formatPrice(item.price)}
                                        </Typography>
                                    </Box>
                                </CardContent>

                                <Box sx={{ pb: 1 }}>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        startIcon={<ShoppingCart />}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Products;


{/* <Grid container spacing={4} style={{ justifyContent: 'center' }}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}  >
                        <Card sx={{ width: 250, height: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 2, position: 'relative', backgroundColor: 'transparent', boxShadow: 0, ":hover": { boxShadow: '2px 2px 10px rgb(179, 174, 174)' } }} >
                            <div style={{ display: 'flex', justifyContent: 'end' }}>
                                <IconButton
                                    onClick={() => toggleWishlist(item.id)}
                                >
                                    {wishlist.includes(item.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </div>

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
                                <Link to='single_product'>
                                    <CardMedia
                                        component="img"
                                        height="190"
                                        image={item.image}
                                        alt={item.description}
                                        sx={{ objectFit: 'cover', ":hover": { transform: 'scale(1.05)' } }}
                                    />
                                </Link>
                            </Box>

                            <CardContent sx={{ textAlign: 'center', padding: 1 }}>
                                <Typography variant="body1" fontWeight="bold" textAlign='start' noWrap> {item.brand} </Typography>
                                <Typography variant="body1" fontWeight="bold" fontSize={14} textAlign='start' >
                                    {item.description}
                                </Typography>

                               
                                <Box textAlign='start'>
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
            </Grid> */}