import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
	// primary: { main: '#4aaef5' },
	primary: { main: '#1480c9' },
	type: 'dark'
};
const themeName = 'Cool Dark Blue';

export default createMuiTheme({
	palette,
	themeName,
	typography: {
		useNextVariants: true,
		fontFamily: [
			'Merriweather',
			'serif'
		].join(',')
	},
});