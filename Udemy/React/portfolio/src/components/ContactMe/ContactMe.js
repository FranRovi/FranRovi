import React from 'react'

import classes from './ContactMe.module.css'

const AboutMe = () => {
    return(
        <div>
            <p className={classes.red}>About Me</p>
            <p >Hi!, I'm Francisco, a full-stack software developer with a background in law.</p>
            <p >I'm on a journey to transform my new found passion for software development into a fulfilling carrer.</p>
            <p >Currently, I'm located in the San Francisco Bay Area.</p>
            <p>When I'm not writing code I enjoy practicing sports, reading or spending time outside.</p>
        </div>
    )
}

export default AboutMe;