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

let n, e, m = false;

const handleInputChange = (event, type) => {
	const { value } = event.target;
	const l = value.trim().length;
	if (l > 0) {
		switch (type) {
		case 'n':
			n = true;
			break;
		case 'e':
			e = true;
			break;
		case 'm':
			m = true;
			break;
		default:
			break;
		}
	}
	else {
		if (type === 'n') n = false;
		if (type === 'e') e = false;
		if (type === 'em') m = false;
	}
};


const ContactForm = props => {
	const classes = useStyles();

	const submitForm = event => {
		if (!(n && e && m)) {
			event.preventDefault();
			props.setWarningMessage('Some empty fields are required!');
		}
	};

	return (
		<form
			className={classes.container}
			noValidate
			id='contact-form'
			name="contact-form"
			method="POST"
			onSubmit={e => submitForm(e)}
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
				onChange={e => handleInputChange(e, 'n')}
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
				onChange={e => handleInputChange(e, 'e')}

			/>
			<TextField
				required
				label="How can we help you?"
				className={classes.textField}
				margin="normal"
				variant="outlined"
				name="message"
				onChange={e => handleInputChange(e, 'm')}

			/>
			<input type="hidden" name="form-name" value="contact-form" />
			<Button variant="contained" className={classes.button} type="submit">
				Send
			</Button>
		</form>
	);
};

export default ContactForm;