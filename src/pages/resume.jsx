import React from 'react';
import '../../public/css/resume.css';
import '../../public/css/contact.css';
import * as resume from '../pages/resume/details';

const pdf = require("../../public/img/adobe-pdf-icon.png");


class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let technologies = resume.technologies.map((tech,idx) => {
            return (
                <div className="techs" key={idx}>
                    {tech}
                </div>
            )
        });

        let experience = resume.work.map((job, idx) => {
            let details = job.details.map((detail,i) => {
                return (
                    <li className="job-detail" key={i}>{detail}</li>
                )
            })
            return (
                <div className="job-main" key={idx}>
                    <div className="job-title">{job.position}</div>
                    <div className="job-company">{job.company}</div>
                    <div className="job-details">{details}</div>
                </div>
            )
        })

        let education = resume.education.map((school, idx) => {
            return (
                <div className="school-main" key={idx}>
                    <div className="school-degree">{school.degree}</div>
                    <div className="school-school">{school.school}</div>
                </div>
            )
        });

        let extra = resume.projects.map((project, idx) => {
            let details = project.details.map((detail, i) => {
                return (
                    <li className="job-detail" key={i}>{detail}</li>
                )
            });
            return (
                <div key={idx}>
                    <div className="job-company projects">{project.name}</div>
                    <div className="job-details projects">{details}</div>
                </div>
            )
        })

        return (
            <div>
                <div className="resume-intro">
                    {/* <div className="contact-resume">
                        <a href={resume} download="Bailey_Wei_Resume.pdf" className="resume-btn resume-page">
                            Resume <img className="contact-ico" src={pdf} ></img>
                        </a>
                    </div> */}
                </div>
                <div className="resume-main">
                    <div className="resume-section">
                        <div className="resume-left">
                            Technologies
                        </div>
                        <div className="resume-right tech-list">
                            {technologies}
                        </div>
                    </div>
                   
                    <div className="resume-section">
                        <div className="resume-left">
                            Experience
                        </div>
                        <div className="resume-right">
                            {experience}
                        </div>
                    </div>
                   
                    <div className="resume-section education">
                        <div className="resume-left ">
                            Projects
                        </div>
                        <div className="resume-right">
                            {extra}
                        </div>
                    </div>
                   
                    <div className="resume-section ">
                        <div className="resume-left">
                            Education
                        </div>
                        <div className="resume-right">
                            {education}
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Resume;