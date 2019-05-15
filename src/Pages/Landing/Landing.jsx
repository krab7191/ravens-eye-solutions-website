// React imports
import React from 'react';

// Component imports 
import Header from '../../Components/Header';

// Page theming
import themes from '../../themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const Landing = () => {
    return (
        <MuiThemeProvider theme={themes.CoolDarkBlue}>
            <Header />
        </MuiThemeProvider>
    );
}

export default Landing;