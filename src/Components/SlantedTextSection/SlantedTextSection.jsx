// React imports
import React from 'react';

// Dependency imports
// Material UI imports
import { withStyles } from '@material-ui/core/styles';

// Others

// Style imports
import './SlantedTextSection.css';

const styles = {
	container: {
		width: '100%',
		textAlign: 'center'
	}
};


const SlantedTextSection = props => {
	const { classes } = props;

	return (
		<>
			<div
				className='slant-div'
				style={{
					borderBottom: `${props.slantSize} solid ${props.bgColor}`,
					transform: `skewY(${props.angle})`
				}}></div>
			<div
				className={classes.container}
				style={{
					backgroundColor: props.bgColor,
					paddingBottom: `calc(${props.slantSize} / 1.5)`
				}}
			>
				{props.children}
			</div >
		</>
	);
};

export default withStyles(styles)(SlantedTextSection);