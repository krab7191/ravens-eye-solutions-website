// React imports
import React, { Component } from 'react';

// Dependency imports
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Style imports 
import './ParallaxSection.css';

const styles = theme => ({
	button: {
		color: theme.palette.text.primary
	}
});

class ParallaxImageSection extends Component {

	render() {
		// For Mat-UI props
		const { classes } = this.props;
		// Other React props
		const { height } = this.props;

		return (
			<>
				<div className='parallax-container'
					align="center"
					style={{ height: height || '480px' }}>
					<Typography
						variant="h2"
						align="center"
						color="default"
						className="parallax-text">
						We See the Future of Your Business
          	</Typography>
					<Button variant="contained" color="primary" className={classes.button}>
						GET IN TOUCH
					</Button>
					<Typography
						variant="h3"
						align="center"
						color="default"
						className="parallax-text">
						Avoid the Confusion of the Technology World while Receiving High-End Products for Your Business.
          	</Typography>
				</div>
			</>
		);
	}
}

export default withStyles(styles)(ParallaxImageSection);