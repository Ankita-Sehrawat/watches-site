import React from 'react';
import { Box, Button, Typography, Link } from '@mui/material';

const Login = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#dda2430d', 
        textAlign: 'center', 
        padding: 3,
        marginTop: 3,
        borderRadius: 1
      }}
    >
      <Typography 
        variant="h5" 
        component="h2"
        sx={{ 
          fontWeight: 'bold',
          marginBottom: 3
        }}
      >
        LOGIN FOR THE BEST EXPERIENCE
      </Typography>
      
      <Button
        variant="contained"
        size="large"
        sx={{
          marginBottom: 3,
          padding: '8px 24px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark'
          }
        }}
        onClick={() => {
          // Handle login modal open
          console.log('Login clicked');
        }}
      >
        Login Now
      </Button>
      
      <Box sx={{ textAlign: 'center' }}>
        <Link
          href="#"
          sx={{
            cursor: 'pointer',
            color: 'text.primary',
            textDecoration: 'underline',
            '&:hover': {
              color: 'primary.main'
            }
          }}
          onClick={() => {
            // Handle signup modal open
            console.log('Signup clicked');
          }}
        >
          Create An Account
        </Link>
      </Box>
    </Box>
  );
};

export default Login;