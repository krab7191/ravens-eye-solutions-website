// React imports
import React from 'react';

// Component imports 
import Header from '../../Components/Header';
import ParallaxSection from '../../Components/ParallaxSection';
import SlantedTextSection from '../../Components/SlantedTextSection';

// Page theming
import themes from '../../themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// Image imports
const bgImage = require('../../media/beverage-background.jpg');

const Landing = () => {
	return (
		<MuiThemeProvider theme={themes.CoolDarkBlue}>
			<Header />
			<ParallaxSection
				height="calc(250px + 30vw)"
				media={bgImage}
			/>
			<SlantedTextSection />
		</MuiThemeProvider>
	);
};

export default Landing;