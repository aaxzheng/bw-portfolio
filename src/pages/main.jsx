import React from 'react'
import { Link } from 'react-router-dom';
import "../../public/css/main.css";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    render() {
        return (
            <div className="main-page">
                <div className="wrapper">
                    <div className="main-info">
                        <div className="main-summary-wrapper">
                            <div className="main-name">
                                Bailey Wei
                            </div>

                        </div>
                        <div className="main-btns">
                            <a className="main-btn-link" href={'../../img/Bailey_Wei_Resume.pdf'} download="Bailey_Wei_Resume.pdf"><div className="main-btn"> Resume </div></a> 
                            <a className="main-btn-link" href="#my-projects"><div className="main-btn"> My Projects </div></a>
                        </div>
                    </div>
                </div>
                <div className={'main-bio'}>
                    <div className={'main-bio-intro'}>
                        About Me
                    </div>
                    <hr className={'main-bio-intro-line'}/>
                    <div className={'main-bio-text'}>
                        I'm a machine learning engineer with demonstrated experience in deep learning and iOS development.
                        Recently graduated with a Masters in Operations Research and Information Engineering from Cornell University. 
                        Open to talk about interesting opportunies, basketball, and games.
                    </div>
                </div>
                <div className={'main-project'} name={'my-projects'}>
                    <div className={'main-bio-intro'}>
                        My Projects
                    </div>
                    <div className={'main-project-wrapper'}>
                        <div className={'main-project-content'}>
                            <div className={'main-project-title-wrapper'}>
                                <div className={'main-project-title'}>Fine-Grained Sentiment Classifier</div>
                                <div>
                                    <a className="main-btn-link" href={'https://arxiv.org/abs/2005.13619'} target='_blank'>arXiv</a> | <a className="main-btn-link" href={'https://github.com/bw-tech/Language-Representation-Models-for-Fine-Grained-Sentiment-Classification'} target='_blank'>Github</a>
                                </div>
                            </div>
                            <div className={'main-project-summary'}>
                                Sentiment classification is a quickly advancing field of study with applications in almost any field. Many models and studies have been done for a simple binary case, a good or bad result for sentiment. However, work in-regards to fine-grained sentiment classification, a more multi-class case, has room for signification improvement. This project aims to dive deeper into the famous Stanford Sentiment Tree Bank dataset using BERT, ALBERT, DistilBERT, and RoBERTa models. Through using these BERT-based models, we can further test the accuracy and complexity trade-offs between them and also further understand the difficulty of fine-grained sentiment classification.
                            </div>
                        </div>
                    </div>

                    <div className={'main-project-wrapper'}>
                        <div className={'main-project-content'}>
                            <div className={'main-project-title-wrapper'}>
                                <div className={'main-project-title'}>Eyevisor</div>
                                {/* <div>
                                    <a>Live</a> | <a>Github</a>
                                </div> */}
                            </div>
                            <div className={'main-project-summary'}>
                                Eyevisor, an iOS application, was created in hopes to better allow those who are vision-impaired to have a chance of “seeing” the world around them. A user can simply take a photo, or use one taken in the past, and have a description of their surroundings. Further support and audio cues are given to the user to ensure easy-of-use and accessibility.
                            </div>
                        </div>
                    </div>

                    <div className={'main-project-wrapper'}>
                        <div className={'main-project-content'}>
                            <div className={'main-project-title-wrapper'}>
                                <div className={'main-project-title'}>Fake Twitter News Classifer</div>
                                <div>
                                    <a className="main-btn-link" href={'https://github.com/bw-tech/Fake-Twitter-News-Classifer'} target={'_blank'}>Github</a>
                                </div>
                            </div>
                            <div className={'main-project-summary'}>
                                The world is full of misinformation. For instance, half the twitter accounts discussing the "reopening america" are fake (read more about it <a className={'main-info-link'} href={'https://www.cs.cmu.edu/news/nearly-half-twitter-accounts-discussing-%E2%80%98reopening-america%E2%80%99-may-be-bots?mod=article_inline'} target={'_blank'}>here</a>). For this project, my team and I created a model to accurately identify a "troll tweet" AKA fake news. We combined Google's BERT semantic labeling tool and binary classification models to reach a 99.81% classification accuracy on our test set.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'main-contact'}>
                    <div className={'main-bio-intro'}>
                        You can reach me here!
                    </div>
                    <hr className={'main-bio-intro-line'} />
                    <div className={'main-contact-info'}>
                        <div className={'main-contact-line1'}>
                            <div className={'main-contact-line1-content'}><img src={require('../../public/img/mail.svg')} alt={''} /> business@baileywei.com</div>
                            <div className={'main-contact-line1-content'}><img src={require('../../public/img/phone.svg')} alt={''} /> 1-646-371-6126</div>
                        </div>
                        <div className={'main-contact-line1'}>   
                            <div className={'main-contact-line1-content'}>
                                <img src={require('../../public/img/linkedin-logo.svg')} alt={''}/>
                                <a href={'https://linkedin.com/in/baileywei'} target='_blank' className={'main-contact-linkedin'}>My LinkedIn</a>
                            </div>
                            <div className={'main-contact-line1-content'}>
                                <img className={'main-content-github'} src={require('../../public/img/github.png')} alt={''} />
                                <a href={'https://github.com/bw-tech'} target='_blank' className={'main-contact-linkedin'}>My Github</a>
                            </div>
                        </div>
                        <div className={'main-contact-line1 resume'}> 
                            <div className={'main-contact-line1-content'}>
                                <img src={require('../../public/img/portfolio.svg')} alt={''} />
                                <a href={'/Bailey-Wei-Resume.pdf'} download className={'main-contact-linkedin'}>My Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;