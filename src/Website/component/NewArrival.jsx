import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos
} from '@mui/icons-material';

const NewArrival = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const arrivals = [
    {
      name: "Purple Collection",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4e79502b/images/Purple_CollectionKV2_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw71f3ee01/images/Purple_CollectionKV2_M.jpg",
      link: "https://www.titan.co.in/titan-women.html"
    },
    {
      name: "Wedding Collection",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw19b94c59/images/NA_Wedding_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwf4dc24e2/images/NA_Wedding_M.jpg",
      link: "https://www.titan.co.in/the-wedding-edit.html"
    },
    {
      name: "Stellar",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw83817a15/images/Stellar_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw848cbc5e/images/Stellar_M.jpg",
      link: "https://www.titan.co.in/titan-stellar.html?lang=en_IN"
    },
    {
      name: "Raga Memoirs",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw56c44965/images/Memoir_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwbae9d595/images/Memoir_M.jpg",
      link: "https://www.titan.co.in/collection-raga-memoirs.html"
    },
    {
      name: "Zoop Collection",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwc6867e46/images/NA_Zoop_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw93e8e599/images/NA_Zoop_M.jpg",
      link: "https://www.titan.co.in/collection-zoop.html"
    },
    {
      name: "Smart Crown Collection",
      desktopImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwd5ff40f0/images/homepage/All_Banners/NewArrivals_Smart_CrownCollection_D.jpg",
      mobileImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw80dcce2a/images/homepage/All_Banners/NewArrivals_Smart_CrownCollection_M.jpg",
      link: "https://www.titan.co.in/crown-collection.html?lang=en_IN"
    }
  ];

  const handleNext = () => {
    if (currentIndex < arrivals.length - 1) {
      setCurrentIndex(prev => prev + 1);
      scrollRef.current.scrollLeft += isMobile ? 300 : 400;
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      scrollRef.current.scrollLeft -= isMobile ? 300 : 400;
    }
  };

  const ArrivalCard = styled('div')(({ theme }) => ({
    minWidth: isMobile ? 300 : 400,
    height: isMobile ? 300 : 400,
    margin: theme.spacing(0, 1),
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: theme.shadows[4]
    }
  }));

  return (
    <Box sx={{ 
      px: isMobile ? 2 : 4,
      py: 4,
      position: 'relative',
      maxWidth: '100vw',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    }}>
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
        NEW ARRIVALS
      </Typography>

      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            position: 'absolute',
            left: isMobile ? -10 : -20,
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
          {arrivals.map((arrival, index) => (
            <a 
              key={index} 
              href={arrival.link} 
              style={{ textDecoration: 'none' }}
              aria-label={`View ${arrival.name}`}
            >
              <ArrivalCard>
                <Box
                  component="img"
                  src={isMobile ? arrival.mobileImage : arrival.desktopImage}
                  alt={arrival.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </ArrivalCard>
            </a>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          disabled={currentIndex === arrivals.length - 1}
          sx={{
            position: 'absolute',
            right: isMobile ? -10 : -20,
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
      </Box>
    </Box>
  );
};

export default NewArrival;