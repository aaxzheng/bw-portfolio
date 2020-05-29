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
                            <Link className="main-btn-link" to="/project"><div className="main-btn"> My Projects </div></Link>
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
            </div>
        );
    }
}

export default Main;