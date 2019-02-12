import React, { Component } from 'react';
import Folder from './components/Folder';
import Main from './components/Main';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import store from './store'
import { Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    notes: store.notes,
    folders: store.folders
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>
        <Sidebar state={this.state}>
          <Route path='/folders/:foldersId' component={Folder} />
        </Sidebar>
        <Main state={this.state.notes}>
          <Route exact path='/' component={Main} /> 
          <Route path='/note/:noteId' component={Note} />
        </Main>
        
        
      </div>
    );
  }
}

export default App;
