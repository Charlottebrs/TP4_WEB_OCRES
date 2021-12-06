import logo from './logo.svg';
import './App.css';
import Bouton from './bouton.js';
import React from 'react';
import {Profil} from './profil.js';


class App extends React.Component {
  constructor(props){
    super(props)
    const profil = [<Profil nom="Dupond" prenom="Jeanne" date="15/09/97"/>, 
                    <Profil nom="Durand" prenom="Martine" date="20/09/90"/>,
                    <Profil nom="Chevalier" prenom="Claude" date="5/05/88"/>]
    this.state = {
      profilBis : profil,
      currentProfil : profil[0]

    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  getProfil(name){
    for(var i=0;i<this.state.profilBis.length;i++){
      if(this.state.profilBis[i].props.prenom === name){
        return this.state.profilBis[i];
      }
    }

  }

  handleChange(event){
    console.log(event)
    this.setState({currentProfil : this.getProfil(event.props.text)})
  }

  render(){
    return (
      <div>
        <div>
        <Bouton text = "Jeanne"  handleChange={this.handleChange} />
        <Bouton text = "Martine" handleChange={this.handleChange}/>
        <Bouton text = "Claude" handleChange={this.handleChange}/>
        </div>
        <div>
          <p>{this.state.currentProfil}</p>
        </div>
      </div>
    );

  }
  
}



export default App;

