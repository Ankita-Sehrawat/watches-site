import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import QuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    id: 1,
    text: "Such an excellent team. Responding to the customer needs with so much care and detailed explanations.",
    author: "ARUN"
  },
  {
    id: 2,
    text: "Good service more than expected. Fast and solution provided by TITAN Repair center. KEEP IT UP.",
    author: "AMIR KHAN"
  },
  {
    id: 3,
    text: "I am very happy for solved my problem, my problem is to much hard but your technician is very supportive and very carefully and easily solved the problem, thanks a lot for good service. Happy Sunday... Have a good day Thanks and regards Mr. Rahul Das.",
    author: "RAHUL"
  },
  {
    id: 4,
    text: "Dear Titan Team, I just wanted to take a moment to appreciate the excellent service/product you provide. The quality and dedication you put into your work truly stand out. I've had a great experience with, and I highly recommend your brand to others. Keep up the great work! Best regards, [Anchal cheetty]",
    author: "ANCHAL"
  },
  {
    id: 5,
    text: "I am writing to express my sincere appreciation for the recent service I received. I was very pleased with the repair and services of my watch... Thank you so much.",
    author: "KOUSHANI"
  },
  {
    id: 6,
    text: "I recently got my Titan watch battery replaced at Titan, and I must say the experience was excellent. The staff was professional, courteous, and knowledgeable... Highly satisfied with their service and would definitely recommend Titan authorized service centers for reliable watch care!",
    author: "SHIV SHANKAR CHOUBEY"
  },
  {
    id: 7,
    text: "Top notch. I could not say anything when I got service from such people who had not sold me the watch but provided very prompt service when I contacted them... I respect the sense of service of the team.",
    author: "SANDIPANI"
  },
  {
    id: 8,
    text: "I visited many stores for my watch service but no one can identify what the problem is with my watch but Suraj ji is very experienced... Thank you Suraj ji.",
    author: "ABHISHEK"
  },
  {
    id: 9,
    text: "I've bought watches from The Last Wind-Up and also had watches repaired there. In every case, my experience has been excellent. Dave and the others who work there are professional and courteous and do fine work. And the price is always good.",
    author: "KRISHNA SUNAR"
  }
];

const Testimonial = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      py: 8,
      px: isMobile ? 2 : 10
    }}>
      <Typography variant="h2" component="h1" sx={{
        textTransform: 'uppercase',
        textAlign: { xs: 'left', lg: 'center' },
        mb: 6,
        fontWeight: 'bold',
        fontSize: isMobile ? '1.8rem' : '2.5rem'
      }}>
        Testimonials
      </Typography>

      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Carousel
          showArrows={!isMobile}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <Box
              onClick={onClickHandler}
              sx={{
                position: 'absolute',
                zIndex: 2,
                top: '50%',
                left: 20,
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                display: hasPrev ? 'block' : 'none'
              }}
            >
              <img 
                src="/path-to-your-prev-arrow.svg" 
                alt="Previous" 
                style={{ width: '40px', height: '40px' }}
              />
            </Box>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <Box
              onClick={onClickHandler}
              sx={{
                position: 'absolute',
                zIndex: 2,
                top: '50%',
                right: 20,
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                display: hasNext ? 'block' : 'none'
              }}
            >
              <img 
                src="/path-to-your-next-arrow.svg" 
                alt="Next" 
                style={{ width: '40px', height: '40px' }}
              />
            </Box>
          )}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <Box
              component="li"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              sx={{
                width: 10,
                height: 10,
                display: 'inline-block',
                margin: '0 4px',
                borderRadius: '50%',
                backgroundColor: isSelected ? theme.palette.secondary.main : theme.palette.grey[400],
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.light
                }
              }}
              aria-label={`${label} ${index + 1}`}
            />
          )}
        >
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id} sx={{ px: isMobile ? 2 : 10, py: 4 }}>
              <Box sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderRadius: 2,
                p: 4,
                position: 'relative',
                boxShadow: 3,
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <QuoteIcon sx={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  fontSize: '3rem',
                  color: theme.palette.grey[300],
                  opacity: 0.5
                }} />
                <Typography variant="body1" sx={{
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  fontStyle: 'italic',
                  mb: 3,
                  px: 4
                }}>
                  {testimonial.text}
                </Typography>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  textAlign: 'right',
                  pr: 4
                }}>
                  - {testimonial.author}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonial;