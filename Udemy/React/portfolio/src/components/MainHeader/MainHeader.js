import React, { useState } from 'react';

import classes from './MainHeader.module.css';
import profilePic from '../../assets/profile.jpg';

const MainHeader = (props) => {
    const [aboutMeIsClicked, setAboutMeIsClicked] = useState(false);

    const aboutMeClickHandler = () => {
        setAboutMeIsClicked((prevAboutMe) => !prevAboutMe);
    };
    console.log(aboutMeIsClicked);

    return(
        <header className={classes['main-header']}>
            {/* <nav className={`${classes['main-row']} ${classes['main-links-center']}`}> */}
            <nav className={`${classes['main-row']} ${classes['main-links-center']}`}>
                <div>
                    <img src={profilePic} alt="portrait of myself" className={classes['main-image']}/>
                </div>
                <div>   
                    <h1 className={classes['main-mr']}>Francisco Rovirosa</h1>
                    <h4>Full-Stack Developer</h4>
                </div>
                <ul>
                    <div className={classes['main-links']}>
                        {/* <li className={classes['main-link-white']}></li>
                        <li className={classes['main-link-white']}></li> */}
                        {<button className={classes['main-link-white']} aboutMeIsClicked={aboutMeIsClicked} onClick={aboutMeClickHandler}>About Me</button>}
                        <li className={classes['main-link-white']}>Projects</li>
                        <li className={classes['main-link-white']}>Contact</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;