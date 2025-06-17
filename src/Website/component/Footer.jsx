import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Divider,
    IconButton,
    Collapse,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    Facebook,
    Instagram,
    Twitter,
    YouTube
} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [expandedSections, setExpandedSections] = React.useState({
        collections: false,
        customerService: false,
        contactUs: false,
        aboutTitan: false
    });

    const handleExpandClick = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const FooterSection = ({ title, children, sectionKey }) => {
        return (
            <Box>
                {isMobile ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            py: 1
                        }}
                        onClick={() => handleExpandClick(sectionKey)}
                    >
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        {expandedSections[sectionKey] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Box>
                ) : (
                    <Typography variant="h6" component="h5" gutterBottom>
                        {title}
                    </Typography>
                )}

                <Collapse in={!isMobile || expandedSections[sectionKey]} timeout="auto" unmountOnExit>
                    <Box component="ul" sx={{ listStyle: 'none', pl: 0, mt: 1 }}>
                        {children}
                    </Box>
                </Collapse>
            </Box>
        );
    };

    const FooterLink = ({ href, children, target = '_self' }) => (
        <Box component="li" sx={{ py: 0.5 }}>
            <Link href={href} color="inherit" underline="hover" target={target}>
                {children}
            </Link>
        </Box>
    );

    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 4 }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    {/* Collections */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterSection title="COLLECTIONS" sectionKey="collections">
                            <FooterLink href="/titan-automatics.html">Titan Automatics</FooterLink>
                            <FooterLink href="/police-batman.html">Police Batman</FooterLink>
                            <FooterLink href="/titan-stellar.html">Stellar</FooterLink>
                            <FooterLink href="/raga-power-pearls.html?lang=en_IN">Raga Power Pearls</FooterLink>
                            <FooterLink href="https://www.titan.co.in/nebula-jewels?lang=en_IN">Nebula Jewels</FooterLink>
                            <FooterLink href="https://www.titan.co.in/titan-grandmaster?lang=en_IN">Grandmaster</FooterLink>
                            <FooterLink href="https://www.titan.co.in/titan-maritime?lang=en_IN">Maritime</FooterLink>
                        </FooterSection>
                    </Grid>

                    {/* Customer Service */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterSection title="CUSTOMER SERVICE" sectionKey="customerService">
                            <FooterLink href="https://www.titan.co.in/content/payment-options.html?lang=en_IN">
                                Payment Options
                            </FooterLink>
                            <FooterLink href="https://www.titan.co.in/on/demandware.store/Sites-Titan-Site/en_IN/Order-TrackGuestOrder">
                                Track Order
                            </FooterLink>
                            <FooterLink href="https://www.titanencircle.com/" target="_blank">
                                Encircle Program
                            </FooterLink>
                            <FooterLink href="https://www.titan.co.in/store-locator?lang=en_IN">
                                Find Titan World Stores
                            </FooterLink>
                        </FooterSection>
                    </Grid>

                    {/* Contact Us */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterSection title="CONTACT US" sectionKey="contactUs">
                            <FooterLink href="tel:1800-266-0123">1800-266-0123</FooterLink>
                            <FooterLink href="mailto:customercare@titan.co.in">customercare@titan.co.in</FooterLink>
                            <FooterLink href="https://www.titan.co.in/help-faqs.html?lang=en_IN">Help &amp; Contact</FooterLink>
                            <FooterLink href="https://www.titan.co.in/faq.html?lang=en_IN">FAQs</FooterLink>
                        </FooterSection>
                    </Grid>

                    {/* About Titan */}
                    <Grid item xs={12} sm={6} md={3}>
                        <FooterSection title="ABOUT TITAN" sectionKey="aboutTitan">
                            <FooterLink href="https://www.titan.co.in/brand-protection.html?lang=en_IN">
                                Brand Protection
                            </FooterLink>
                            <FooterLink href="https://www.titancompany.in/" target="_blank">
                                Corporate
                            </FooterLink>
                            <FooterLink href="https://careers.titan.in/?rms=titan" target="_blank">
                                Careers
                            </FooterLink>
                            <FooterLink href="https://www.titan.co.in/blog.html?rms=titan" target="_blank">
                                Blog
                            </FooterLink>
                        </FooterSection>
                    </Grid>

                    {/* App Download and Social */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Download Titan World App
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Link href="https://apps.apple.com/us/app/world-of-titan/id1351637761?ls=1" target="_blank">
                                    <img
                                        src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw435df752/images/footer/Group 15609.png"
                                        alt="App Store"
                                        style={{ height: 40 }}
                                    />
                                </Link>
                                <Link href="https://play.google.com/store/apps/details?id=com.titancompany.tx37consumerapp" target="_blank">
                                    <img
                                        src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwac46a6ed/images/footer/Group 15610@2x.png"
                                        alt="Google Play"
                                        style={{ height: 40 }}
                                    />
                                </Link>
                            </Box>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Follow Us With
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton href="https://www.facebook.com/titanwatches" target="_blank">
                                    <Facebook />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/titanwatchesindia" target="_blank">
                                    <Instagram />
                                </IconButton>
                                <IconButton href="https://twitter.com/titanwatches" target="_blank">
                                    <Twitter />
                                </IconButton>
                                <IconButton href="https://www.youtube.com/@titanwatchesindia" target="_blank">
                                    <YouTube />
                                </IconButton>
                            </Box>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2">
                                <span>Want Help? </span>
                                <Link href="https://api.whatsapp.com/send?phone=916366920144" target="_blank" color="inherit">
                                    Click Here
                                </Link>
                                <span> To Chat With Us On </span>
                                <Link href="https://api.whatsapp.com/send?phone=916366920144" target="_blank">
                                    <img
                                        src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw20817314/images/footer/Whatsapp.svg"
                                        alt="WhatsApp"
                                        style={{ height: 20, verticalAlign: 'middle' }}
                                    />
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                Operating Hours: 10:00AM To 10:00PM Monday To Sunday
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Grid container spacing={2} alignItems="center">
                    {/* Payment Methods */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            {[
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw7331dfe9/images/footer/Icon%20simple-visa.svg',
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw80575962/images/footer/Icon payment-mastercard-alt.svg',
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwcb6903ec/images/footer/Icon payment-paypal.svg',
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwf004a14c/images/footer/american-express-1.svg',
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa77efe0d/images/footer/diners-club-logo3-1.svg',
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw4aef4129/images/footer/rupay.svg',
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw0ba79c12/images/footer/icici-1.svg',
                                'https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw8b4d086c/images/footer/axis-bank-logo-1.svg'
                            ].map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="Payment method"
                                    style={{ height: 24 }}
                                />
                            ))}
                        </Box>
                    </Grid>

                    {/* Copyright and Links */}
                    <Grid item xs={12} md={7} sx={{ justifyContent: 'center' }}>
                        <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                            <Typography variant="body2" gutterBottom>
                                © 2025 Titan Company Limited. All Rights Reserved.
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                                <Link href="https://www.titan.co.in/terms-and-conditions.html?lang=en_IN" target="_blank" variant="body2">
                                    Terms &amp; Conditions
                                </Link>
                                <span>|</span>
                                <Link href="https://www.titan.co.in/privacy-policy.html?lang=en_IN" target="_blank" variant="body2">
                                    Privacy Policy
                                </Link>
                                <span>|</span>
                                <Link href="https://www.titan.co.in/wearable-privacy-policy.html?lang=en_IN" target="_blank" variant="body2">
                                    Wearable Privacy Policy
                                </Link>
                                <span>|</span>
                                <Link href="https://www.titan.co.in/warranty-policy.html?lang=en_IN" target="_blank" variant="body2">
                                    Warranty Policy
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;