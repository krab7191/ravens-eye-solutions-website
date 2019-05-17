// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Dependency imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Style imports 
import './ParallaxImageSection.css';

const styles = theme => ({
	button: {
		color: '#fff'
	}
});

class ParallaxImageSection extends Component {

	render() {
		const { classes } = this.props;

		return (
			<>
				<div className="parallax-container" align="center">
					<Typography
						variant="h2"
						align="center"
						color="inherit"
						className="parallax-text">
						We See the Future of Your Business
          	</Typography>
					<Button variant="contained" color="primary" className={classes.button}>
						GET IN TOUCH
					</Button>
				</div>
			</>
		);
	}
}

ParallaxImageSection.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParallaxImageSection);