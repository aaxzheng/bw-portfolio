import React from 'react'
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
                            Your Name Goes Here
                        </div>
                        <div className="main-bio">
                        Your bio goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                        </div>
                        <div className="main-btns">
                            <div className="main-btn"> About Me </div>
                            <div className="main-btn"> My Projects </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;