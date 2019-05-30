// React imports 
import React from 'react';

// Material UI imports 
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Dependency imports

// Style imports
import './Footer.css';

const styles = theme => ({
	container: {
		backgroundColor: theme.palette.background.default,
		padding: '30px'
	}
});

const Footer = props => {
	const { classes } = props;

	return (
		<div id="footer" className={classes.container}>
			<Typography
				variant="body2"
				align="center"
				color="textPrimary"
			>
				Raven's Eye Solutions &copy; 2019
          	</Typography>
		</div>
	);
};

export default withStyles(styles)(Footer);