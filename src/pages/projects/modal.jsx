import React from 'react'
import '../../../public/css/modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            project: this.props.project,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps,prevState) {
        if (this.props.show !== prevProps.show) {
            this.setState({show:this.props.show});
        }
        if (this.props.project !== prevProps.project) {
            this.setState({ project: this.props.project });
        }  

    }

    handleClick(e) {
        this.props.toggleModal(e);
    }

    render() {
        let description = this.state.project.description;
        let show = "show"; 
        if (this.state.show === false) {
            show = "hide"
        }
        return (
            <div className={"modal-wrapper " + show} onClick={(e) => this.handleClick(e)}>
                <div className="modal-main" onClick={(e) => e.stopPropagation()}>
                    <div>{description}</div>
                </div>
            </div>
        );
    }
}

export default Modal;