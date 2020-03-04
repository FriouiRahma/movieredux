import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DELETEMOVIE} from '../actions/movieactions';
import  AddModal   from './AddModal';
import Rate   from './Rate';
import {Link} from 'react-router-dom';

class Movielist extends Component {

    constructor(props) {
        super(props)
        this.state = {}

    }

    render() {
        return (
            <div className="movies" >
               <Rate rate1={this.props.movlist.Rate}/>
                {this.props.movlist.movies.filter(el => el.rate >= this.props.movlist.Rate &&  el.title.toUpperCase().includes(this.props.movlist.searchTerm.toUpperCase().trim()) ).map(el => <div className="onemovie"  >
                   
                    <div>
                        <h4> {el.title}</h4>
                        <h3>{el.year}</h3>
                    </div>
                    <img className="imgmovie" src={el.image} />
                    <button onClick={()=>this.props.deleteMo(el.id)} >Delete</button>
                    <Link to={`/${el.title}`}> Description </Link>
                    <AddModal EditMod={true} newobj={el}  />
                    <Rate rate1={el.rate} />

                </div>)}

            </div>
        );
    }
}

const mapStateToprops = (state) => {
    return {
        movlist: state.MovieReducres
    };


};

const mapDispatchToprops=(dispatch)=>{
    return{
        deleteMo: (id)=>dispatch(DELETEMOVIE(id))
    }
}


export default connect(mapStateToprops,mapDispatchToprops)(Movielist);




