// React imports
import React from 'react';

// Dependency imports

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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
	},
	button: {
		margin: theme.spacing(2)
	}
}));


const ContactForm = () => {
	const classes = useStyles();

	return (
		<form
			className={classes.container}
			noValidate
			data-netlify="true"
			id='contact-form'
			name="contact-form"
			method="POST"
			data-netlify-recaptcha="true"
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
			<Input
				required
				id="outlined-required"
				placeholder="How can we help you?"
				className={classes.textField}
				margin="dense"
				variant="outlined"
				multiline={true}
			/>
			<div data-netlify-recaptcha="true"></div>
			<Button variant="contained" className={classes.button} type="submit">
				Send
			</Button>
		</form>
	);
};

export default ContactForm;