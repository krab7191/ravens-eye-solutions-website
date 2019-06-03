// React imports
import React from 'react';

// Material UI imports
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Style imports
import './Modal.css';

const styles = theme => ({
	modal: {
		position: 'fixed',
		top: '8vh',
		width: 'calc(90vw - 30px)',
		left: '50%',
		marginLeft: '-45vw',
		padding: '15px',
		borderRadius: '15px',
		zIndex: '1200',
		backgroundColor: theme.palette.error.dark,
		// horizontal, vertical, blur, spread
		boxShadow: '0 2px 8px 4px ' + theme.palette.background.paper,
		textAlign: 'center',
		display: 'none'
	}
});

const Modal = props => {
	const { classes } = props;

	return (
		<div className={classes.modal} id='modal' onClick={() => document.getElementById('modal').style.display = 'none'}>
			<Typography variant="body2" color="textPrimary">
				{props.text}
			</Typography>
		</div>
	);
};

export default withStyles(styles)(Modal);