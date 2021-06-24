import React from 'react';

import Card from '../Card/Card';
import classes from './Projects.module.css';

const Projects = (props) => {
    console.log(props)
    return(
        <div>
            <h2 className={classes.pt}> 
                Here you will find some information about the projects I've been working lately
            </h2>
            <ul>
                {
                    props.projectsInfo.map((project)=>
                        <Card key={project.id}>
                            
                            <li className={classes['project-title']}>{project.name}</li>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg' alt="Russia's red square plaza"/>
                            <li className={classes['project-description']}>{project.description}</li>
                        </Card>
                        )
                }
            </ul>
        </div>
    )
}

export default Projects;