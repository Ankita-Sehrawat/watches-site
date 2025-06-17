import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  styled,
  Paper,
  MobileStepper
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@mui/icons-material';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      name: "Titan Sale",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw42732bc9/images/homepage/All_Banners/MainSale_June2025_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw49cf781a/images/homepage/All_Banners/MainSale_June2025_M.jpg",
      link: "https://www.titan.co.in/shop/titan-sale?lang=en_IN"
    },
    {
      name: "Father's Day",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dweb8abaef/images/homepage/All_Banners/FathersDaySale_June2025_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0d22967c/images/homepage/All_Banners/FathersDaySale_June2025_M.jpg",
      link: "https://www.titan.co.in/shop/men-watches-on-sale?lang=en_IN"
    },
    // Add other items as needed
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 3),
    margin: theme.spacing(0, 1),
    borderRadius: 4,
    fontWeight: 600,
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%',
      height: isMobile ? '400px' : '600px',
      overflow: 'hidden'
    }}>
      {/* Carousel Items */}
      <Box sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        transition: 'transform 0.5s ease',
        transform: `translateX(-${activeIndex * 100}%)`
      }}>
        {carouselItems.map((item, index) => (
          <Box 
            key={index}
            sx={{
              minWidth: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            <a href={item.link} aria-label={`Image Link For ${item.name}`}>
              <Box
                component="img"
                src={isMobile ? item.mobileImage : item.desktopImage}
                alt={item.name}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </a>
            
            {/* Navigation Buttons */}
            {!isMobile && (
              <>
                <IconButton
                  onClick={handleBack}
                  sx={{
                    position: 'absolute',
                    left: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.5)'
                    }
                  }}
                >
                  <KeyboardArrowLeft fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.5)'
                    }
                  }}
                >
                  <KeyboardArrowRight fontSize="large" />
                </IconButton>
              </>
            )}
          </Box>
        ))}
      </Box>

      {/* Indicators */}
      <MobileStepper
        variant="dots"
        steps={carouselItems.length}
        position="static"
        activeStep={activeIndex}
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          justifyContent: 'center',
          backgroundColor: 'transparent',
          '& .MuiMobileStepper-dot': {
            backgroundColor: 'rgba(255,255,255,0.5)',
            margin: '0 4px'
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: theme.palette.primary.main
          }
        }}
        nextButton={null}
        backButton={null}
        onClick={(e) => {
          const index = Array.from(e.currentTarget.children[0].children)
            .indexOf(e.target);
          if (index >= 0) goToIndex(index);
        }}
      />
    </Box>
  );
};

export default HeroSection;