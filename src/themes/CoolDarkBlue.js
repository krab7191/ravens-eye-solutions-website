import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
	primary: { main: '#4aaef5' },
	type: 'dark'
};
const themeName = 'Cool Dark Blue';

export default createMuiTheme({
	palette,
	themeName,
	typography: {
		useNextVariants: true,
		fontFamily: [
			'Caveat',
			'cursive'
		].join(',')
	},
});