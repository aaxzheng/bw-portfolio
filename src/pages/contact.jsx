import React from 'react'
import '../../public/css/contact.css';
const resume = require("../../public/img/Bailey_Wei_Resume.pdf");
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="contact-main">
                <div className="contact-body">

                <div className="contact-left">
                    <div className="contact-msg">
                        Want to reach me?
                    </div>
                    <div className="contact-info"> 
                        Your-Email@Someplace.com
                        <br/>
                        <br />
                        1-555-555-5555
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-social-holder">
                        <div className="contact-resume">
                            <a href="https://linkedin.com/in/baileywei" target="_blank" className="resume-btn">
                                    LinkedIn
                            </a>
                        </div>
                        <div className="contact-resume">
                                <a href="https://github.com/bw-tech" target="_blank" className="resume-btn">
                                    Github
                            </a>
                        </div>
                        <div className="contact-resume">
                            <a href={resume} download="Bailey_Wei_Resume.pdf" className="resume-btn">
                                Get My Resume
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;