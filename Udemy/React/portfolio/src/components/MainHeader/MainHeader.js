import React, { useState } from 'react';

import classes from './MainHeader.module.css';
import profilePic from '../../assets/profile.jpg';

const MainHeader = (props) => {
    const [aboutMeIsClicked, setAboutMeIsClicked] = useState(true);
    const [projectsIsClicked, setProjectsIsClicked] = useState(false);
    const [contactIsClicked, setContactIsClicked] = useState(false);

    const aboutMeClickHandler = () => {
        setAboutMeIsClicked((prevAboutMe) => !prevAboutMe);
    };
    const projectsClickHandler = () => {
        setProjectsIsClicked((prevAboutMe) => !prevAboutMe);
    };
    const contactClickHandler = () => {
        setContactIsClicked((prevAboutMe) => !prevAboutMe);
    };
    props.onAboutMeState(aboutMeIsClicked);
    props.onProjectState(projectsIsClicked);
    props.onContactState(contactIsClicked);
    // console.log(aboutMeIsClicked);

    return(
        <header className={classes['main-header']}>
            {/* <nav className={`${classes['main-row']} ${classes['main-links-center']}`}> */}
            <nav className={`${classes['main-row']} ${classes['main-links-center']}`}>
                <img src={profilePic} alt="portrait of myself" className={classes['main-image']}/>
                <div>   
                    <h1 className={classes['main-mr']}>Francisco Rovirosa</h1> 
                    <h4>Full-Stack Developer</h4>
                </div>
                <ul>
                    <div className={classes['main-links']}>
                        {/* <li className={classes['main-link-white']}></li>
                        <li className={classes['main-link-white']}></li> */}
                        {/* {<button className={classes['main-link-white']} onAboutMeBtnclicked={aboutMeIsClicked} onClick={aboutMeClickHandler}>About Me</button>} */}
                        {<button className={classes['main-btn']} onClick={aboutMeClickHandler}>About Me</button>}
                        {<button className={classes['main-btn']} onClick={projectsClickHandler}>Projects</button>}
                        {<button className={classes['main-btn']} onClick={contactClickHandler}>Contact</button>}
                        <button className="btn btn-light">Button 4</button>
                        {/* <li className={classes['main-link-white']}>Projects</li>
                        <li className={classes['main-link-white']}>Contact</li> */}
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;