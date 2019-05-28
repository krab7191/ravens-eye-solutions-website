// React imports
import React from 'react';

// Dependency imports

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Style imports
import './ContactForm.css';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: theme.palette.primary.main,
		justifyContent: 'center',
		padding: '30px'
	},
	textField: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2)
	},
	button: {
		margin: '10px auto',
		width: '100px'
	}
}));


const ContactForm = () => {
	const classes = useStyles();

	return (
		<form
			className={classes.container}
			noValidate
			id='contact-form'
			name="contact-form"
			method="POST"
		>
			<TextField
				required
				label="Name"
				defaultValue=""
				className={classes.textField}
				margin="normal"
				variant="outlined"
				autoComplete="name"
				name="name"
			/>
			<TextField
				required
				label="Email Address"
				defaultValue=""
				className={classes.textField}
				margin="normal"
				variant="outlined"
				autoComplete="email"
				name="email"
			/>
			<TextField
				required
				label="How can we help you?"
				className={classes.textField}
				margin="normal"
				variant="outlined"
				name="message"
			/>
			<input type="hidden" name="form-name" value="contact-form" />
			<Button variant="contained" className={classes.button} type="submit">
				Send
			</Button>
		</form>
	);
};

export default ContactForm;