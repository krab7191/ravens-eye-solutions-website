// React imports
import React from 'react';

// Component imports 
import Header from '../../Components/Header';
import ParallaxImageSection from '../../Components/ParallaxImageSection';

// Page theming
import themes from '../../themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const Landing = () => {
	return (
		<MuiThemeProvider theme={themes.CoolDarkBlue}>
			<Header />
			<ParallaxImageSection />
		</MuiThemeProvider>
	);
};

export default Landing;