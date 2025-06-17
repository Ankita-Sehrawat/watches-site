import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos
} from '@mui/icons-material';

const Category = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const categories = [
    {
      name: "Sale",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc8887c27/images/sale_.jpg",
      link: "/shop/offers?lang=en_IN"
    },
    {
      name: "Bestsellers",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw1d15f863/images/Bestseller_thumb.jpg",
      link: "/shop/bestsellers?lang=en_IN"
    },
    {
      name: "Men",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0c68edb6/images/men_.jpg",
      link: "/shop/watches-for-men?lang=en_IN"
    },
    {
      name: "Women",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb8df3006/images/women.jpg",
      link: "/shop/watches-for-women?lang=en_IN"
    },
    {
      name: "Kids",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw43a80cbb/images/kids.jpg",
      link: "/shop/watches-for-kids?lang=en_IN"
    },
    {
      name: "Mag By Titan",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc6fe5bf9/images/Mag_category.jpg",
      link: "/magazine-flipbook.html?lang=en_IN"
    },
    {
      name: "Couple",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw07037e98/images/couple.jpg",
      link: "/shop/couple-watches?lang=en_IN"
    },
    {
      name: "New Arrivals",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw34276b43/images/New_Arrivals_thumb.jpg",
      link: "/shop/new-arrivals?lang=en_IN"
    },
    {
      name: "Raga",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwff30f749/images/ragaB.jpg",
      link: "/shop/collections-raga?lang=en_IN"
    },
    {
      name: "Luxe",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw5188cbbe/images/luxe.jpg",
      link: "/shop/luxury?lang=en_IN"
    },
    {
      name: "Clocks",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw73a3bc3e/images/clock.jpg",
      link: "/shop/all-clocks?lang=en_IN"
    },
    {
      name: "Smart",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa60efba7/images/Smart_thumb.jpg",
      link: "/shop/smart?lang=en_IN"
    }
  ];

  const handleNext = () => {
    if (currentIndex < categories.length - 1) {
      setCurrentIndex(prev => prev + 1);
      scrollRef.current.scrollLeft += 200;
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const CategoryCard = styled(Paper)(({ theme }) => ({
    minWidth: 160,
    height: 180,
    margin: theme.spacing(0, 1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.shadows[4]
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 180,
      height: 200
    }
  }));

  return (
    <Box sx={{ 
      px: isMobile ? 2 : 4,
      py: 4,
      position: 'relative',
      maxWidth: '100vw',
      overflow: 'hidden'
    }}>
      <Typography 
        variant="h5" 
        component="h3" 
        align="center" 
        sx={{ 
          mb: 4,
          fontWeight: 600,
          color: 'text.primary'
        }}
      >
        THE BEST WAY TO BUY THE PRODUCTS YOU LOVE
      </Typography>

      <Box sx={{ position: 'relative' }}>
        {!isMobile && (
          <>
            <IconButton
              onClick={handlePrev}
              disabled={currentIndex === 0}
              sx={{
                position: 'absolute',
                left: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                backgroundColor: 'background.paper',
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: 'background.paper'
                },
                '&.Mui-disabled': {
                  opacity: 0.5
                }
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={currentIndex === categories.length - 1}
              sx={{
                position: 'absolute',
                right: -20,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                backgroundColor: 'background.paper',
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: 'background.paper'
                },
                '&.Mui-disabled': {
                  opacity: 0.5
                }
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </>
        )}

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            py: 1,
            px: isMobile ? 0 : 2,
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link} 
              style={{ textDecoration: 'none' }}
              aria-label={`Shop ${category.name}`}
            >
              <CategoryCard elevation={3}>
                <Box
                  component="img"
                  src={category.image}
                  alt={category.name}
                  sx={{
                    width: 120,
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    mb: 1
                  }}
                />
                <Typography 
                  variant="subtitle1" 
                  component="div"
                  sx={{ 
                    fontWeight: 500,
                    color: 'text.primary',
                    textAlign: 'center'
                  }}
                >
                  {category.name}
                </Typography>
              </CategoryCard>
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Category;