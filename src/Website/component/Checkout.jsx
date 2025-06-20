import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    Box,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    InputAdornment,
    IconButton,
    Divider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar
} from '@mui/material';
import {
    LocationOn,
    Phone,
    Email,
    Home,
    Flag,
    Clear,
    ArrowDropDown
} from '@mui/icons-material';
import Navbar from './Navbar';

const Checkout = () => {
    const [salutation, setSalutation] = useState('Mr');
    const [countryCode, setCountryCode] = useState('91');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        houseNo: '',
        address: '',
        landmark: '',
        postalCode: '',
        city: '',
        state: '',
        country: 'India'
    });

    const countryOptions = [
        { code: '91', name: 'India', flag: '/flags/in.svg' },
        { code: '1', name: 'USA', flag: '/flags/us.svg' },
        { code: '44', name: 'UK', flag: '/flags/gb.svg' },
        // Add other countries as needed
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCountryChange = (code) => {
        setCountryCode(code);
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Guest Checkout
                </Typography>
                <Divider sx={{ my: 2 }} />

                {/* Title Selection */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>Title</Typography>
                    <RadioGroup
                        row
                        value={salutation}
                        onChange={(e) => setSalutation(e.target.value)}
                    >
                        <FormControlLabel value="Mr" control={<Radio />} label="Mr." />
                        <FormControlLabel value="Ms" control={<Radio />} label="Ms." />
                    </RadioGroup>
                </Box>

                {/* Personal Information */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                    <TextField
                        fullWidth
                        required
                        label="Full name"
                        variant="outlined"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        sx={{ flex: '1 1 300px' }}
                    />
                    <TextField
                        fullWidth
                        required
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{ flex: '1 1 300px' }}
                    />
                </Box>

                {/* Phone Number */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>Mobile Number</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <FormControl sx={{ width: 120 }}>
                            <InputLabel id="country-code-label">Code</InputLabel>
                            <Select
                                labelId="country-code-label"
                                value={countryCode}
                                label="Code"
                                onChange={(e) => handleCountryChange(e.target.value)}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar
                                            src={`/flags/${countryOptions.find(c => c.code === selected)?.flag}`}
                                            sx={{ width: 24, height: 24, mr: 1 }}
                                        />
                                        +{selected}
                                    </Box>
                                )}
                            >
                                {countryOptions.map((country) => (
                                    <MenuItem key={country.code} value={country.code}>
                                        <ListItemIcon>
                                            <Avatar src={country.flag} sx={{ width: 24, height: 24 }} />
                                        </ListItemIcon>
                                        <ListItemText primary={`+${country.code}`} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            required
                            label="Phone Number"
                            variant="outlined"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            inputProps={{ maxLength: 10, pattern: "[6-9][0-9]{9}" }}
                        />
                    </Box>
                </Box>

                {/* Address Section */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Shipping Address
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                        <TextField
                            fullWidth
                            required
                            label="Flat/House Number"
                            variant="outlined"
                            name="houseNo"
                            value={formData.houseNo}
                            onChange={handleChange}
                            sx={{ flex: '1 1 300px' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Home color="action" />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Box>

                    <TextField
                        fullWidth
                        required
                        label="Address (Building Name, Street, Area)"
                        variant="outlined"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <LocationOn color="action" />
                                </InputAdornment>
                            )
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Landmark"
                        variant="outlined"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <TextField
                            fullWidth
                            required
                            label="Pincode"
                            variant="outlined"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            sx={{ flex: '1 1 200px' }}
                            inputProps={{ maxLength: 6 }}
                        />
                        <TextField
                            fullWidth
                            required
                            label="City"
                            variant="outlined"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            sx={{ flex: '1 1 200px' }}
                            disabled
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                        <TextField
                            fullWidth
                            required
                            label="State"
                            variant="outlined"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            sx={{ flex: '1 1 200px' }}
                            disabled
                        />
                        <TextField
                            fullWidth
                            required
                            label="Country"
                            variant="outlined"
                            name="country"
                            value={formData.country}
                            sx={{ flex: '1 1 200px' }}
                            disabled
                        />
                    </Box>
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                    <Button variant="outlined" color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary">
                        Continue
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Checkout;