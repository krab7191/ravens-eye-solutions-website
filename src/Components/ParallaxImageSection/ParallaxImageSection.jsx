// React imports
import React from 'react';

// Dependency imports
import Typography from '@material-ui/core/Typography';

// Style imports 
import './ParallaxImageSection.css';


const ParallaxImageSection = () => (
    <>
        <div className="parallax-container">
        	<Typography
        		variant="h2"
        		align="center"
        		color="inherit"
        		className="parallax-text">
                We see the future of your business
          	</Typography>
        </div>
    </>
);
export default ParallaxImageSection;