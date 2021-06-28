import React from 'react';

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    return(
        <header className={classes['main-header']}>
            {/* <nav className={`${classes['main-row']} ${classes['main-links-center']}`}> */}
            <nav className={`${classes['main-row']} ${classes['main-links-center']}`}>
                <div>   
                    <h1 className={classes['main-mr']}>Francisco Rovirosa</h1>
                    <h4>Full-Stack Developer</h4>
                </div>
                <ul>
                    <div className={classes['main-links']}>
                        {/* <li className={classes['main-link-white']}></li>
                        <li className={classes['main-link-white']}></li> */}
                        <li className={classes['main-link-white']}>About Me</li>
                        <li className={classes['main-link-white']}>Projects</li>
                        <li className={classes['main-link-white']}>Contact</li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;