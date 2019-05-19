// React imports
import React from 'react';

// Component imports 
import Header from '../../Components/Header';
import ParallaxSection from '../../Components/ParallaxSection';

// Page theming
import themes from '../../themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const Landing = () => {
	return (
		<MuiThemeProvider theme={themes.CoolDarkBlue}>
			<Header />
			<ParallaxSection height="calc(250px + 30vw)" />
		</MuiThemeProvider>
	);
};

export default Landing;