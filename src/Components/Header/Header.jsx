// React imports
import React, { Component } from 'react';

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
import Button from '@material-ui/core/Button';

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

	navHome = () => {
		window.location.href = "/";
	}

	render() {
		const { classes } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div className={`${classes.root} header`} >
				<AppBar>
					<Toolbar>
						<img src="./assets/images/RES-icon-crop.png" alt="Raven's eye logo" className={`${classes.icon} logo`} onClick={this.navHome} />
						<Typography variant="h5" color="textPrimary" className={`${classes.grow} brand`} onClick={this.navHome}>
							Raven's Eye Solutions
          	  </Typography>
						<a href="#about-us">
							<Button
								color="default"
								className="navigation-link"
							>ABOUT</Button>
						</a>
						<a href="#contact-form">
							<Button
								color="default"
								variant="outlined"
								className="navigation-link"
							>CONTACT</Button>
						</a>
						<IconButton
							className="hamburger"
							aria-owns='menu-appbar'
							aria-haspopup="true"
							onClick={this.handleMenu}
							color="default">
							<Icon>
								menu
							</Icon>
						</IconButton>
						<Menu
							className="hamburger"
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
							<a href="#about-us">
								<MenuItem onClick={this.handleClose}>ABOUT</MenuItem>
							</a>
							<a href='#contact-form'>
								<MenuItem onClick={this.handleClose}>CONTACT</MenuItem>
							</a>
						</Menu>
					</Toolbar>
				</AppBar>
			</div>
		);
	}

}

export default withStyles(styles)(Header);