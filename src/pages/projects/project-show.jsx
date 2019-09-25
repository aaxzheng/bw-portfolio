import React from 'react'
import {Redirect} from 'react-router-dom';
import '../../../public/css/show.css';
import ItemsCarousel from 'react-items-carousel';
import Modal from './modal';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0,
            children: [],
            selected: "",
            show: false,
            thumbnail: "",
        };
        this.toggleModal = this.toggleModal.bind(this);
    }


    componentWillMount() {
        if (this.props.location.state) {
            this.setState({children: this.props.location.state.project.children, thumbnail: this.props.location.state.project.thumbnail});
        }
    }

    toggleModal(e, image) {
        if (image) {
            this.setState({ selected: image })
        }
        e.stopPropagation();
        this.setState({ show: !this.state.show });
    }

    render() {
        let test;
        let project;
        let description;
        let show = this.state.show;

        if (this.props.location.state === undefined ) {
            test = <Redirect to="/project"/>; 
        } else {
            project = this.props.location.state.project.projectName;
            description = this.props.location.state.project.description;
        }
        

        return (
            <div className="show-main-container">
                <Modal show={show} toggleModal={this.toggleModal} image={this.state.selected} />

                <div className="show-main" style={{ "backgroundImage": "url(" + this.state.thumbnail + ")", "backgroundSize": "100% 100%"}}>
                    <div className="show-main-wrapper">
                        <div className="show-title">{project}</div>
                        {test}
                    </div>
                </div>
                    <div className="show-body">
                        <div className="show-description">{ description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description }</div>
                        <div style={{ "maxWidth": "180vmin", "marginBottom": "5%"}}>
                            <ItemsCarousel
                                gutter={12}
                                activePosition={'center'}
                                chevronWidth={60}
                                disableSwipe={false}
                                alwaysShowChevrons={false}
                                numberOfCards={2}
                                slidesToScroll={1}
                                outsideChevron={true}
                                showSlither={true}
                                firstAndLastGutter={true}
                                activeItemIndex={this.state.activeItemIndex}
                                requestToChangeActive={value => this.setState({ activeItemIndex: value % this.state.children.length})}
                                rightChevron={'>'}
                                leftChevron={'<'}
                                style={{"width": "181vmin", "marginRight":"5vmin"}}
                                >
                                {
                                    this.state.children.map((img,i) => {
                                        return (
                                            <img 
                                            key={i} 
                                            src={img.background} 
                                            className="show-img"
                                            onClick={(e) => this.toggleModal(e,img)}
                                            />   
                                            )
                                        })
                                    }
                            </ItemsCarousel>
                        </div>
                    </div>
                
            </div>
        );
    }
}

export default Show;