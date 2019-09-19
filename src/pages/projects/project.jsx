import React from 'react';
import '../../../public/css/project.css';
import '../../../public/css/main.css';
import { projectList } from './project-list';
import {Link} from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: projectList,
            hovered: -1,
            colors: ["red ", "green ", "gold ", "blue ", "orange ","purple "],
            selected: "",
            show: false,
        };
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleMouseOver(e,idx) {
        e.stopPropagation();
        this.setState({hovered:idx});
    }


    handleMouseLeave() {
        this.setState({hovered:-1});
    }


    toggleModal(e,project) {
        if (project) {
            this.setState({selected: project })
        }
        e.stopPropagation();
        this.setState({show:!this.state.show});
    }

    render() {
        let projects;
        projects = this.state.projects.map((project,idx) => {
            let color = this.state.colors[idx % 6];
            let info;
            let projectName = project.projectName;
            if (idx === this.state.hovered) {
                projectName = project.description;
                info = "info"
            }
            return (
                <div 
                 className={"project-box-main " + color} 
                 onMouseOver={(e) => this.handleMouseOver(e,idx)} 
                 onMouseLeave={this.handleMouseLeave}
                 key={idx}
                 >
                <Link to={{
                    pathname: '/show',
                    state: {
                        project: project
                    }
                }}
                    className="project-link"
                >
                    <div className={"project-box-info " + info}> 
                        {projectName}
                    </div>
                 </Link>
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