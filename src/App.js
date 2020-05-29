import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Directory from './Components/DirectoryComponent';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar darl color="primary">
          <div className="container">
            <NavbarBrand href="/">Nucamp</NavbarBrand>
            <Directory />
          </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
