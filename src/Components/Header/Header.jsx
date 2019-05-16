// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Dependency imports ==>

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import './Header.css';

// Component specific styles
const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: 15,
	},
	icon: {
		height: "35px",
		width: "auto",
		marginRight: "15px"
	}
};

class Header extends Component {
	state = {
		anchorEl: null
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div className={classes.root} >
				<AppBar>
					<Toolbar>
						<img src="./assets/images/RES-icon-crop.png" alt="Raven's eye logo" className={`${classes.icon} logo`} />
						<Typography variant="h4" color="inherit" className={classes.grow}>
							Raven's Eye Solutions
          	</Typography>
						<IconButton
							aria-owns='menu-appbar'
							aria-haspopup="true"
							onClick={this.handleMenu}
							color="inherit">
							<Icon>
								menu
							</Icon>
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={this.handleClose}
						>
							<MenuItem onClick={this.handleClose}>About</MenuItem>
							<MenuItem onClick={this.handleClose}>Get In Touch</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</div>
		);
	}

}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);