import React from 'react'
import '../../public/css/contact.css';
const pdf = require("../../public/img/adobe-pdf-icon.png");
const ln = require("../../public/img/linkedin-ico.png")

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
                        Ways to reach me.
                    </div>
                    <div className="contact-info"> 
                        business@baileywei.com 
                        bw489@cornell.edu
                        <br/>
                        <br />
                        1-646-371-6126
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-social-holder">
                        <div className="contact-resume">
                            <a href="https://linkedin.com/in/baileywei" target="_blank" className="resume-btn">
                                LinkedIn <img className="contact-linkedin" src={ln} />
                            </a>
                        </div>
 {
    //  /* {                       <div className="contact-resume"> */}
    //                             <a href="https://github.com/bw-tech" target="_blank" className="resume-btn">
    //                             Github
    //                         </a>
    //                     </div>
                        }
                        <div className="contact-resume">
                            <a href={resume} download="Bailey_Wei_Resume.pdf"  className="resume-btn">
                                Resume <img className="contact-ico" src={pdf} ></img>
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