// React imports
import React from 'react';

// Dependency imports
import classNames from 'classnames';

// Component imports 
import Header from '../../Components/Header';
import ParallaxSection from '../../Components/ParallaxSection';
import SlantedTextSection from '../../Components/SlantedTextSection';
import ContactForm from '../../Components/ContactForm';
import Footer from '../../Components/Footer';

// Page theming
import themes from '../../themes';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// Material UI imports
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// Image imports
const bgImage = require('../../media/beverage-background.jpg');

const techSectionInfo = [
	['React', 'Squarespace', 'Netlify'],
	['React', 'Node.js', 'Angular'],
	['Pouracle', 'Data Collection', 'REST APIs']
];
const icons = ['computer', 'phone_android', 'wifi'];
const areas = ['Websites', 'Webapps', 'Custom Solutions'];

const styles = theme => ({
	sectionHead: {
		fontSize: '2rem',
		paddingBottom: '20px',
		width: '85%',
		margin: '0 auto',
		color: theme.palette.primary.contrastText
	},
	textSection: {
		margin: '0 auto',
		width: '90%',
		maxWidth: '640px',
		fontSize: '1.5rem',
		color: theme.palette.primary.contrastText
	},
	bold: {
		fontWeight: 'bold',
		fontSize: '1.6rem',
		paddingTop: '0'
	},
	grid: {
		width: '100%',
		textAlign: 'center'
	},
	p: {
		margin: '0'
	},
	contactForm: {
		height: '800px',
		marginBottom: '100px'
	}
});

const Landing = props => {
	console.log('The theme: ', themes.CoolDarkBlue);
	const { classes } = props;
	return (
		<MuiThemeProvider theme={themes.CoolDarkBlue}>
			<Header />
			<ParallaxSection
				height="calc(250px + 30vw)"
				media={bgImage}
			/>
			<SlantedTextSection
				slantSize='80px'
				angle='2deg'
				bgColor={themes.CoolDarkBlue.palette.background.default}
			>
				<Typography
					className={classes.sectionHead}
					variant='body2'
					id="about-us"
				>
					We create what you need to succeed:
				</Typography>
				<Grid container spacing={2} className={classes.grid}>
					{icons.map((icon, i) => (
						<Grid item xs={12} sm={4} key={i}>
							<Typography
								variant='body2'>
								<Icon color='primary'>
									{icon}
								</Icon>
							</Typography>
							<Typography
								className={classNames(classes.textSection, classes.bold)}
								variant='body2'>
								{areas[i]}
							</Typography>
							{techSectionInfo[i].map((t, j) => (
								<Typography
									className={classes.textSection}
									variant='body2'
									key={j}>
									{t}
								</Typography>
							))}
						</Grid>
					))}
				</Grid>
			</SlantedTextSection>
			<SlantedTextSection
				slantSize='80px'
				angle='2deg'
				bgColor={themes.CoolDarkBlue.palette.background.paper}
				className={classes.secondSlantSection}
			>
				<Typography
					className={classes.sectionHead}
					variant='body2'
					id="get-in-touch">
					Get In Touch
				</Typography>
				<Typography
					className={classes.textSection}
					variant='body2'>
					1) Make an appointment
				</Typography>
				<Typography
					className={classes.textSection}
					variant='body2'>
					2) Tell us your needs
				</Typography>
				<Typography
					className={classes.textSection}
					variant='body2'>
					3) We will build your future together
				</Typography>
			</SlantedTextSection>
			<ContactForm />
			<Footer />
		</MuiThemeProvider>
	);
};

export default withStyles(styles)(Landing);