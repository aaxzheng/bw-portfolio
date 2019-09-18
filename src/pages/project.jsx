import React from 'react';
import '../../public/css/project.css';
import '../../public/css/main.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [1,2,3,4,5,6,7,8],
            colors: ["red", "green", "gold", "blue", "orange","purple"]
        };
    }



    render() {
        let projects;
        projects = this.state.projects.map((project,idx) => {
            let color = this.state.colors[idx % 6];
            return (
                <div key={idx} className={"project-box-main " + color}>

                </div>
            )
        })
        return (
            <div className="project-main">
                <div className="project-wrap wrapper">
                    <div className="project-intro">
                        My Projects
                    </div>
                    <div className="project-list">
                        {projects}
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;