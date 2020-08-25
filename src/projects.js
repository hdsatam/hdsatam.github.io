import React from 'react';
import ProjectPanel from './projectPanel.js';
import Grid from '@material-ui/core/Grid';
import projs from './json/projects.json';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div class="projects">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div class="projectsTitle">
                            <b>Projects</b>
                        </div>
                    </Grid>
                    {projs["projects"].map( (proj) => (
                        <Grid item xs={12}>
                            <ProjectPanel project={proj}/>
                            
                            <hr className="projectBar"></hr>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default Projects;