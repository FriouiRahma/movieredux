import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { ADDMOV } from '../actions/movieactions';
import {EDITMOVIE} from  '../actions/movieactions';


class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: "",
            image: "",
            rate: "",
            year: "",
            etat:false,

        };

    }
    
    addNewmovie = () => {
        {this.props.EditMod ? this.props.Modifmovie(this.state ,this.props.newobj.title )   :
        this.props.addmovie({
            title: this.state.title,
            image: this.state.image,
            rate: this.state.rate,
            year: this.state.year
        })
        // console.log("movie added")

    }}
    handelChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleShow = () => {
        this.setState({ show: !this.state.show });
       {this.props.newobj && this.setState({title:this.props.newobj.title,
                       image:this.props.newobj.image,
                       rate:this.props.newobj.rate,
                       year:this.props.newobj.year,
                       etat:true
                       
        })
    }};
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                {this.props.EditMod ? "Edit":"Add new movie"}
        </Button>

                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label>Title:</label>
                                <input type="text" name="title" value={this.state.title} onChange={this.handelChange} />
                            </div>
                            <div>
                                <label>Image:</label>
                                <input type="text" name="image"  value={this.state.image} onChange={this.handelChange} />
                            </div>
                            <div>
                                <label>Rating:</label>
                                <input type="text" name="rate"  value={this.state.rate} onChange={this.handelChange} />
                            </div>
                            <div>
                                <label>Year:</label>
                                <input type="text" name="year" value={this.state.year} onChange={this.handelChange} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
            </Button>
        <Button variant="primary" onClick={this.addNewmovie}>Add movie</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapDispatchtoprops = (dispatch) => {
    return {
        addmovie: (newmovie) => dispatch(ADDMOV(newmovie)),
        Modifmovie:(obj,name)=>dispatch(EDITMOVIE(obj , name))
    }
}


export default connect(null, mapDispatchtoprops)(AddModal);
