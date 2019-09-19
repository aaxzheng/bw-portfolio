import React from 'react'
import '../../../public/css/modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            project: this.props.image,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps,prevState) {
        if (this.props.show !== prevProps.show) {
            this.setState({show:this.props.show});
        }
        if (this.props.image !== this.state.project) {
            this.setState({project:this.props.image});
        }
    }

    handleClick(e) {
        this.props.toggleModal(e);
    }

    render() {
        let show = "show"; 
        if (this.state.show === false) {
            show = "hide"
        }
        debugger;
        return (
            <div className={"modal-wrapper " + show} onClick={(e) => this.handleClick(e)}>
                <div className="modal-main" onClick={(e) => e.stopPropagation()} style={{"backgroundImage":"url(" + this.state.project.background +")", "backgroundSize": "100% 100%"}}>

                </div>
            </div>
        );
    }
}

export default Modal;