import React, { Component } from 'react';
import {connect} from 'react-redux';
import {SEARCHSTAR} from '../actions/movieactions';

class Rate extends Component {
    state = {
        arra: []
    }
    addrate = () => {
        for (let i = 0; i < 4; i++) {

            this.setState({ tab: this.state.arra.push(<i onClick={this.props.setRate(this.props.rating + 1)} class="fal fa-star"></i>) })


        }
    }



    render() {
        let arr = []
        for (let i = 0; i < 5; i++) {
            if (i < this.props.rate1){arr.push(<i onClick={()=>this.props.rate(i+1)}    class="fal fa-star">★</i>)} 
            else arr.push(<i onClick={()=>this.props.rate(i+1)} class="fal fa-star">☆</i>)
        }
        return (
            <div>

                {arr}
              
            </div>
        );
    }
}

const mapDispatchToprops=(dispatch)=>{
    return{
        rate: (r)=>dispatch(SEARCHSTAR(r))
    }

}




export default connect(null,mapDispatchToprops) (Rate) ;