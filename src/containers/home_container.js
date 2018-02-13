import React, { Component } from 'react';

import { connect } from 'react-redux';
import { artistListAll} from '../actions';

import Artistlist from '../components/artistlist';

class HomeContainer extends Component { 

    componentWillMount() {
        this.props.artistListAll()
    }

    render(){
        console.log(this.props)      
        return (
            <div>
                <Artistlist artists={this.props.artists.artistList}/>
            </div>
        )
    }
    
}


function mapStateToProps(state){
    return {
        artists:state.artists
    }
}

function mapDispatchToProps(dispatch){
    return {
        artistListAll: ()=> dispatch(artistListAll())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)