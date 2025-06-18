import React from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Checkbox,
    Box,
    Button,
    Tooltip,
    Rating,
    Divider
} from '@mui/material';
import {
    FavoriteBorder as FavoriteBorderIcon,
    Favorite as FavoriteIcon,
    Compare as CompareIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
    ArrowBackIos as ArrowBackIosIcon
} from '@mui/icons-material';

const Products = () => {
    const product = {
        id: '90196am01_p',
        name: 'Titan Zeal with 4.69 cm AMOLED Display with AOD, Functional Crown, BT Calling, Smartwatch with Black Mesh Strap',
        brand: 'Titan',
        category: 'Unisex Watch',
        price: 9995,
        originalPrice: 13995,
        discount: 29,
        rating: 4.0,
        reviewCount: 42,
        variantCount: 2,
        images: [
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwda6ca9ea/images/Titan/Catalog/90196AM01_1.jpg?sw=360&sh=360',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1facc89c/images/Titan/Catalog/90196AM01_2.jpg?sw=360&sh=360',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfa84c927/images/Titan/Catalog/90196AM01_3.jpg?sw=360&sh=360',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3d395259/images/Titan/Catalog/90196AM01_4.jpg?sw=360&sh=360',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc62e7d9b/images/Titan/Catalog/90196AM01_5.jpg?sw=360&sh=360',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwce22828e/images/Titan/Catalog/90196AM01_6.jpg?sw=360&sh=360',
            'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw275cf03c/images/Titan/Catalog/90196AM01_7.jpg?sw=360&sh=360'
        ],
        inStock: true
    };

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isWishlisted, setIsWishlisted] = React.useState(false);
    const [isComparing, setIsComparing] = React.useState(false);

    const handlePrevImage = () => {
        setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : product.images.length - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev => (prev < product.images.length - 1 ? prev + 1 : 0));
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <Grid item xs={6} sm={4} md={3} data-pid={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Product Image with Navigation */}
                <Box sx={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        image={product.images[currentImageIndex]}
                        alt={product.name}
                        sx={{ height: 220, objectFit: 'contain' }}
                    />

                    {/* Image Navigation Arrows */}
                    <IconButton
                        sx={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                        }}
                        onClick={handlePrevImage}
                    >
                        <ArrowBackIosIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }
                        }}
                        onClick={handleNextImage}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>

                    {/* Wishlist Button */}
                    <Tooltip title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}>
                        <IconButton
                            sx={{ position: 'absolute', top: 8, right: 8 }}
                            onClick={() => setIsWishlisted(!isWishlisted)}
                        >
                            {isWishlisted ? (
                                <FavoriteIcon color="error" />
                            ) : (
                                <FavoriteBorderIcon sx={{ color: 'white' }} />
                            )}
                        </IconButton>
                    </Tooltip>

                    {/* Compare Checkbox */}
                    <Box sx={{ position: 'absolute', bottom: 8, left: 8 }}>
                        <Tooltip title="Compare">
                            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 1 }}>
                                <Checkbox
                                    icon={<CompareIcon />}
                                    checkedIcon={<CompareIcon color="primary" />}
                                    checked={isComparing}
                                    onChange={() => setIsComparing(!isComparing)}
                                    size="small"
                                />
                                <Typography variant="caption">Compare</Typography>
                            </Box>
                        </Tooltip>
                    </Box>
                </Box>

                {/* Product Details */}
                <CardContent sx={{ flexGrow: 1 }}>
                    {/* Rating and Variants */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating value={product.rating} precision={0.5} size="small" readOnly />
                            <Typography variant="caption" sx={{ ml: 0.5 }}>
                                ({product.reviewCount})
                            </Typography>
                        </Box>

                        {product.variantCount > 0 && (
                            <Tooltip title={`${product.variantCount} color variants available`}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{
                                        width: 16,
                                        height: 16,
                                        background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
                                        borderRadius: '50%',
                                        mr: 0.5
                                    }} />
                                    <Typography variant="caption">
                                        +{product.variantCount} Colors
                                    </Typography>
                                </Box>
                            </Tooltip>
                        )}
                    </Box>

                    {/* Brand and Category */}
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {product.brand} | {product.category}
                    </Typography>

                    {/* Product Name */}
                    <Typography variant="subtitle1" component="h3" sx={{
                        fontWeight: 'medium',
                        mb: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {product.name}
                    </Typography>

                    {/* Price */}
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
                            {formatPrice(product.price)}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                textDecoration: 'line-through',
                                color: 'text.secondary',
                                ml: 1
                            }}
                        >
                            {formatPrice(product.originalPrice)}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                color: 'success.main',
                                ml: 1,
                                fontWeight: 'bold'
                            }}
                        >
                            {product.discount}% off
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Products;