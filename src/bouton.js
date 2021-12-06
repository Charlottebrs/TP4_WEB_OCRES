import React from "react";
import './bouton.css';

export default class Bouton extends React.Component{
    render(){
        return(
            <input 
                type="button" 
                value={this.props.text} 
                onClick={ () => this.props.handleChange(this)}
            /> 
        )
    }
}


