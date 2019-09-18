import React from 'react';
import '../../../public/css/project.css';
import '../../../public/css/main.css';
import { projectList } from './project-list';
import Modal from "./modal";


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
        let show = this.state.show;
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
                 key={idx}
                 className={"project-box-main " + color} 
                 onMouseOver={(e) => this.handleMouseOver(e,idx)} 
                 onMouseLeave={this.handleMouseLeave}
                 onClick={(e) => this.toggleModal(e,project)}
                 >
                    <div className={"project-box-info " + info}> 
                        {projectName}
                    </div>
                </div>
            )
        })
        return (
            <div className="project-main">
                <Modal show={show} toggleModal={this.toggleModal} project={this.state.selected}/>
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