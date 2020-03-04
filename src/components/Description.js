import React, { Component } from 'react';
import {connect} from 'react-redux';

class Description extends Component {
 constructor(props){
   super(props)
   this.state={
    
   }

 }
componentWillMount=()=>{
    console.log(this.props.match.params.name)
    this.setState({movie:this.props.movie.movies.filter(el=> el.title== this.props.match.params.name)[0]})
}


    render() {
        return (
            <div>
                {this.state.movie.title}
            </div>
        );
    }
}

const mapStateToprops=(state)=>{
return{
    movie:state.MovieReducres
}

}




export default  connect(mapStateToprops) (Description);


