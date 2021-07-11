import React from 'react'; 

// import Card from '../Card/Card';
import classes from './AboutMe.module.css'

const AboutMe = () => {
    return(
        <div className = {`${classes['pt']} ${classes['line_spacing']}`}>
        {/* // <div className={'classes.pt classes.line_spacing'}> */}
            <h1 className={classes.title}>About me</h1>
            <p >Hi!, I'm Francisco, a full-stack software developer with a background in law. I'm on a journey to transform my new found passion for software development into a fulfilling carrer.
                Currently, I'm located in the San Francisco Bay Area. When I'm not writing code I enjoy practicing sports, reading or spending time outside.</p>
        </div>
    )
};

export default AboutMe;