import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Movserch } from '../actions/movieactions';

class Searchmov extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    HandelChange = (e) => {
        // fonction asynchrone
        //call back function
        this.setState({ text: e.target.value }, () => this.props.searchmov(this.state.text));


    }

    render() {
        return (
            <div>
                <input type="text" name="research" placeholder="Type movie name to search" onChange={this.HandelChange} />

            </div>
        );
    }
}
const mapDispatchToprops = (dispatch) => {

    return {
        searchmov: (title) => dispatch(Movserch(title)),
    }

}

export default connect(null, mapDispatchToprops)(Searchmov);