// React imports
import React, { Component } from 'react';

// Dependency imports
import classNames from 'classnames';

// Component imports 
import Header from '../../Components/Header';
import ParallaxSection from '../../Components/ParallaxSection';
import SlantedTextSection from '../../Components/SlantedTextSection';
import ContactForm from '../../Components/ContactForm';
import Footer from '../../Components/Footer';
import Modal from '../../Components/Modal';

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
	['WordPress', 'Squarespace', 'Netlify'],
	['React', 'Node.js', 'Angular'],
	['Pouracle', 'Data Collection', 'REST APIs']
];
const icons = ['computer', 'phone_android', 'wifi'];
const areas = ['Websites', 'Web Applications', 'Custom Solutions'];

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
		paddingTop: '10px',
		width: '90%',
		maxWidth: '640px',
		fontSize: '1.3rem',
		color: theme.palette.primary.contrastText
	},
	bold: {
		fontWeight: 'bold',
		fontSize: '1.9rem',
		paddingTop: '0'
	},
	grid: {
		width: '100%',
		textAlign: 'center',
		margin: '50px 0'
	},
	p: {
		margin: '0'
	},
	contactForm: {
		height: '800px',
		marginBottom: '100px'
	}
});

let TO;

class Landing extends Component {

	state = {
		warningMessage: ''
	}

	setWarningMessage = text => {
		this.setState({
			warningMessage: text
		});
		const mod = document.getElementById('modal');
		mod.style.display = 'block';
		clearTimeout(TO);
		TO = window.setTimeout(() => {
			mod.style.display = 'none';
		}, 3000);
	}

	render() {
		console.log('The theme: ', themes.CoolDarkBlue);
		const { classes } = this.props;
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
				<ContactForm setWarningMessage={this.setWarningMessage} />
				<Footer />
				<Modal text={this.state.warningMessage} />
			</MuiThemeProvider>
		);
	}
};

export default withStyles(styles)(Landing);