import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Link,
  TextField,
  Divider,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [phoneError, setPhoneError] = useState(false);

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (e) => {
    handleChange(e);
    setPhoneError(!validatePhone(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone if using phone login or in signup
    if ((isLogin && loginMethod === 'phone') || !isLogin) {
      const isPhoneValid = validatePhone(formData.phone);
      setPhoneError(!isPhoneValid);
      if (!isPhoneValid) return;
    }

    if (isLogin) {
      console.log('Login submitted:', loginMethod === 'email' ?
        { email: formData.email, password: formData.password } :
        { phone: formData.phone });
    } else {
      console.log('Signup submitted:', formData);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#dda2430d',
        textAlign: 'center',
        padding: 3,
        marginTop: 3,
        borderRadius: 1,
        maxWidth: 500,
        mx: 'auto'
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 'bold',
          marginBottom: 3
        }}
      >
        {isLogin ? 'LOGIN FOR THE BEST EXPERIENCE' : 'CREATE AN ACCOUNT'}
      </Typography>

      {!isLogin && (
        <>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            type="tel"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            margin="normal"
            required
            error={phoneError}
            helperText={phoneError ? "Phone number must be 10 digits" : ""}
            inputProps={{
              maxLength: 10,
              pattern: "\\d{10}"
            }}
          />
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </>
      )}

      {isLogin && (
        <>
          <Box sx={{ mb: 2 }}>
            <Button
              variant={loginMethod === 'email' ? 'contained' : 'outlined'}
              onClick={() => setLoginMethod('email')}
              sx={{ mr: 1 }}
            >
              Email
            </Button>
            <Button
              variant={loginMethod === 'phone' ? 'contained' : 'outlined'}
              onClick={() => setLoginMethod('phone')}
            >
              Phone
            </Button>
          </Box>

          {loginMethod === 'email' ? (
            <>
              <TextField
                fullWidth
                type="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </>
          ) : (
            <TextField
              fullWidth
              type="tel"
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              margin="normal"
              required
              error={phoneError}
              helperText={phoneError ? "Phone number must be 10 digits" : ""}
              inputProps={{
                maxLength: 10,
                pattern: "\\d{10}"
              }}
            />
          )}
        </>
      )}

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{
          margin: '24px 0',
          padding: '10px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark'
          }
        }}
      >
        {isLogin ? 'Login Now' : 'Sign Up'}
      </Button>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ display: 'inline', mr: 1 }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </Typography>
        <Link
          component="button"
          type="button"
          sx={{
            cursor: 'pointer',
            color: 'text.primary',
            textDecoration: 'underline',
            '&:hover': {
              color: 'primary.main'
            }
          }}
          onClick={() => {
            setIsLogin(!isLogin);
            setFormData({
              name: '',
              email: '',
              phone: '',
              password: ''
            });
            setPhoneError(false);
          }}
        >
          {isLogin ? 'Create An Account' : 'Login Instead'}
        </Link>
      </Box>
    </Box>
  ); 
};

export default Login;