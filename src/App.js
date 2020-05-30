import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Directory from './Components/DirectoryComponent';
import {CAMPSITES} from './shared/Campsites';

class App extends Component {

  
  constructor(props){
    super(props);
    this.state = {campsites: CAMPSITES};
  }


  render(){
    return (
      <div className="App">
        <Navbar darl color="primary">
          <div className="container">
            <NavbarBrand href="/">Nucamp</NavbarBrand>
            <Directory campsites={this.state.campsites} />
          </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
