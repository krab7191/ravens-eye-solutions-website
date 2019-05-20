// React imports
import React from 'react';

// Dependency imports
// Material UI imports
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

// Others
import classNames from 'classnames';

// Style imports
import './SlantedTextSection.css';

const styles = theme => ({
	container: {
		width: '100%',
		backgroundColor: theme.palette.background.default,
		textAlign: 'center'
	},
	sectionHead: {
		fontSize: '1.8rem',
		paddingBottom: '20px'
	},
	textSection: {
		margin: '0 auto',
		width: '90%',
		maxWidth: '640px',
		fontSize: '1.5rem'
	},
	bold: {
		fontWeight: 'bold',
		fontSize: '1.6rem',
		paddingTop: '0'
	},
	grid: {
		width: '100%'
	},
	p: {
		margin: '0'
	}
});


const SlantedTextSection = props => {
	const { classes } = props;
	const websiteTech = ['React', 'Squarespace', 'Wordpress'];
	const webappTech = ['React', 'Node.js', 'Angular', 'REST APIs'];
	const customTech = ['Pouracle', 'Data Collection', 'Craft Beer'];

	return (
		<>
			<div className='slant-div'></div>
			<div className={classes.container}>
				<Typography
					className={classes.sectionHead}
					variant='body2'>
					We create what you need to succeed:
				</Typography>
				<Grid container spacing={24} className={classes.grid}>
					<Grid item xs={8} sm={4}>
						<Typography
							variant='body2'>
							<Icon color='primary'>
								computer
							</Icon>
						</Typography>
						<Typography
							className={classNames(classes.textSection, classes.bold)}
							variant='body2'>
							Websites
						</Typography>
						<Typography
							className={classes.textSection}
							variant='body2'>
							{websiteTech.map(t => (
								<p className={classes.p}>{t}</p>
							))}
						</Typography>
					</Grid>
					<Grid item xs={8} sm={4}>
						<Typography
							variant='body2'>
							<Icon color='primary'>
								phone_android
							</Icon>
						</Typography>
						<Typography
							className={classNames(classes.textSection, classes.bold)}
							variant='body2'>
							Web Apps
						</Typography>
						<Typography
							className={classes.textSection}
							variant='body2'>
							{webappTech.map(t => (
								<p className={classes.p}>{t}</p>
							))}
						</Typography>
					</Grid>
					<Grid item xs={8} sm={4}>
						<Typography
							variant='body2'>
							<Icon color='primary'>
								wifi
							</Icon>
						</Typography>
						<Typography
							className={classNames(classes.textSection, classes.bold)}
							variant='body2'>
							Custom Solutions
						</Typography>
						<Typography
							className={classes.textSection}
							variant='body2'>
							{customTech.map(t => (
								<p className={classes.p}>{t}</p>
							))}
						</Typography>
					</Grid>
				</Grid>
			</div >
		</>
	);
};

export default withStyles(styles)(SlantedTextSection);