import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'customTheme',
})(({ customTheme, variant }) => ({
    color: customTheme?.color || 'inherit',
    backgroundColor: customTheme?.backgroundColor ||
        (variant === 'contained' ? 'primary.main' : 'transparent'),
    padding: customTheme?.padding || '8px 16px',
    margin: customTheme?.margin || '0',
    borderRadius: customTheme?.borderRadius || '4px',
    transition: 'all 0.3s ease',
    '&:hover': {
        color: customTheme?.hoverColor || customTheme?.color || 'inherit',
        backgroundColor: customTheme?.hoverBackground ||
            (variant === 'contained' ? 'primary.dark' : 'action.hover'),
    },
}));

const ButtonTheme = ({
    customTheme = {},
    children,
    ...props
}) => {
    return (
        <StyledButton customTheme={customTheme} {...props}>
            {children}
        </StyledButton>
    );
};

export default ButtonTheme;