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
            children: [
                {
                 background: require("../../../public/img/main-background.jpg")
                },
                {
                 background: require("../../../public/img/project-1.jpg")  
                },
                {
                 background: require("../../../public/img/project-background.jpeg")
                },
            ],
            selected: "",
            show: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
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
            <div className="show-main">
                <Modal show={show} toggleModal={this.toggleModal} image={this.state.selected} />
                 {test}
                <div className="show-body">
                    <div className="show-title">{project}</div>
                    <div className="show-description">{description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description + description + " " + description }</div>
                    <div style={{ "maxWidth": "100vmin", }}>
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
                            firstAndLastGutter={false}
                            activeItemIndex={this.state.activeItemIndex}
                            requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                            rightChevron={'>'}
                            leftChevron={'<'}
                            style={{"width": "100vmin", "marginRight":"5vmin"}}
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