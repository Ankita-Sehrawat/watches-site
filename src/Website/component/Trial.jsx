import React from 'react';
import { useTheme } from '../../ThemeContext';

function Trial() {
    const {
        themeMode,
        buttonTheme,
        updateButtonTheme,
        ThemedButton
    } = useTheme();

    // Example of changing button theme
    const makeButtonsRound = () => {
        updateButtonTheme({
            borderRadius: '20px',
            primaryColor: '#4caf50'
        });
    };

    return (
        <div className={`some-component ${themeMode}`}>
            <h1>Current Theme: {themeMode}</h1>

            {/* Using the ThemedButton */}
            <ThemedButton variant="contained" color="primary">
                Primary Button
            </ThemedButton>

            {/* Button with custom theme override */}
            <ThemedButton
                variant="contained"
                customTheme={{
                    backgroundColor: '#ff5722',
                    hoverBackground: '#e64a19',
                    borderRadius: '8px'
                }}
            >
                Custom Styled Button
            </ThemedButton>

            <button onClick={makeButtonsRound}>
                Make Buttons Round
            </button>
        </div>
    );
}

export default Trial;