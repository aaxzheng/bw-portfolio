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
                        <div className="main-name">
                            Hey, welcome my friend.
                        </div>
                        <div className="main-bio">
                            I'm a machine learning engineer with demonstrated experience in deep learning and iOS development.
                            Recently graduated with a Masters in Operations Research and Information Engineering from Cornell University. 
                            Open to talk about interesting opportunies, basketball, and games.
                        </div>
                        <div className="main-btns">
                            <Link className="main-btn-link" to="/contact"><div className="main-btn"> About Me </div></Link> 
                            <Link className="main-btn-link" to="/project"><div className="main-btn"> My Projects </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;