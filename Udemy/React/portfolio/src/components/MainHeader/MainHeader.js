import React from 'react';

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    return(
        <header className={classes['main-header']}>
            <div className={`${classes['main-row']} ${classes['main-links-center']}`}>
                <div>   
                    <h1 className={classes['main-mr']}>Francisco Rovirosa</h1>
                    <h2>Full-Stack Developer</h2>
                </div>
                <div>
                    <ul className={classes['main-links']}>
                        <li className={classes['main-link-white']}>About Me</li>
                        <li className={classes['main-link-white']}>Projects</li>
                        <li className={classes['main-link-white']}>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default MainHeader;