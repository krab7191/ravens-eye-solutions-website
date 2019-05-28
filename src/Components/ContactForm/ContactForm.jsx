// React imports
import React from 'react';

// Dependency imports

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// Style imports
import './ContactForm.css';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		backgroundColor: theme.palette.primary.main,
		justifyContent: 'center',
		padding: '30px'
	},
	textField: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		color: theme.palette.text.secondary
	}
}));


const ContactForm = () => {
	const classes = useStyles();

	return (
		<form
			className={classes.container}
			noValidate
			netlify="true"
			data-netlify="true"
			id='contact-form'
		>
			<TextField
				required
				id="outlined-required"
				label="Name"
				defaultValue=""
				className={classes.textField}
				margin="normal"
				variant="outlined"
				autoComplete="name"
			/>
			<TextField
				required
				id="outlined-required"
				label="Email Address"
				defaultValue=""
				className={classes.textField}
				margin="normal"
				variant="outlined"
				autoComplete="email"
			/>
			<TextField
				required
				id="outlined-required"
				label="How can we help you?"
				defaultValue=""
				className={classes.textField}
				margin="normal"
				variant="outlined"
			/>
		</form>
	);
};

export default ContactForm;