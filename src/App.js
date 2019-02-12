import React, { Component } from 'react';
import Folder from './components/Folder';
import Main from './components/Main';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import { Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.store
  }



  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
        <Link to='/'>
          <h1>Noteful</h1>
        </Link>
          <Link to='/folders'><h1>folder</h1></Link>
          <Link to='/note/cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'>note</Link>
        </header>
        
        <Route exact path='/' component={Main} />
        
        <Route path='/folders' component={Folder} />
        <Route path='/note/:noteId' component={Note} />
        
      </div>
    );
  }
}

export default App;
