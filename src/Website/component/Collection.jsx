import React from 'react';
import { Grid, Box, Link, Container, Typography } from '@mui/material';

const Collection = () => {
    const collections = [
        {
            name: "Workwear",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4c3b0683/images/WorkwearWD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw6e1901ce/images/WorkwearWM.jpg",
            link: "https://www.titan.co.in/shop/watches-workwear?lang=en_IN"
        },
        {
            name: "Workwear",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc1b2e9d4/images/WorkwearNTD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwcdce61ed/images/WorkwearNTM.jpg",
            link: "https://www.titan.co.in/shop/watches-workwear?lang=en_IN"
        },
        {
            name: "Raga",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw49fff0b0/images/RagaWD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw59b88ab9/images/RagaNTM.jpg",
            link: "https://www.titan.co.in/shop/raga-power-pearls?lang=en_IN"
        },
        {
            name: "Raga",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw7d7f4af8/images/RagaNTD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw53f0b4dc/images/RagaWM.jpg",
            link: "https://www.titan.co.in/raga-power-pearls.html?lang=en_IN"
        },
        {
            name: "Grandmaster",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc0a72efd/images/GrandmasterNATD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwab39d615/images/GrandWM.jpg",
            link: "https://www.titan.co.in/shop/grand-master?lang=en_IN"
        },
        {
            name: "Grandmaster",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwac86eb87/images/GrandWD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4172e0da/images/GrandmasterNTM.jpg",
            link: "https://www.titan.co.in/shop/grand-master?lang=en_IN"
        },
        {
            name: "Maritime",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9c332f65/images/MaritimeTD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdc095b48/images/MaritimeNTM.jpg",
            link: "https://www.titan.co.in/shop/maritime?lang=en_IN"
        },
        {
            name: "Maritime",
            desktopImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw32de8d0d/images/MaritimeWD.jpg",
            mobileImage: "https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd36f796e/images/MaritimeWM.jpg",
            link: "https://www.titan.co.in/shop/maritime?lang=en_IN"
        }
    ];

    return (
        <Container maxWidth="xl">
            <Typography
                variant="h4"
                component="h3"
                align="center"
                sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: 'text.primary'
                }}
            >
                Collection
            </Typography>
            <Box sx={{ my: 4 }}>
                <Grid container spacing={2} sx={{ justifyContent: 'center'  }}>
                    {collections.map((collection, index) => (
                        <Grid item xs={6} sm={3}  key={index} sx={{ justifyContent: 'center'  }}>
                            <Link href={collection.link} underline="none">
                                <Box
                                    component="picture"
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                        '& img': {
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block'
                                        }
                                    }}
                                >
                                    <source
                                        media="(min-width:1023px)"
                                        srcSet={collection.desktopImage}
                                    />
                                    <img
                                        loading="lazy"
                                        alt={collection.name}
                                        src={collection.mobileImage}
                                    />
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Collection;