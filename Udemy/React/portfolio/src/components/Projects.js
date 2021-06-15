import React from 'react';

import Card from './Card';

const Projects = (props) => {
    return(
        <div>
            <h1>Project Component</h1>
            {
                props.projectsInfo.map((project)=>
                    <Card>
                        <li>{project.name}</li>
                        <li>{project.description}</li>
                    </Card>
                    )
            }
        </div>
    )
}

export default Projects;