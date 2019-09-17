import React from 'react'
import {Link} from 'react-router-dom';
import '../../public/css/nav.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="nav-main">
                <div className="nav-links">
                    <Link className="nav-link" to="/">
                        About
                    </Link>
                    <Link className="nav-link" to="/">
                        Resume
                    </Link>
                    <Link className="nav-link" to="/">
                        Projects
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;