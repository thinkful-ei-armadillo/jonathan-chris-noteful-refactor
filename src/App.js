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

  showInitialPage = (e) => {
    return <Main props={e} notes={this.state.notes} />;
  }

  showFolder = (e) => {
    let folder = this.state.folders.find(f => f.id === e.match.params.foldersId);

    return <Folder folder={folder} notes={this.state.notes} />;
  }

// props.match.params.whatever
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>

        <Sidebar state={this.state} setFolder={this.setFolder} />

        <Route exact path='/' render={this.showInitialPage} /> 
        <Route path='/note/:noteId' component={Note} />
        <Route path='/folders/:foldersId' render={this.showFolder} />
      </div>
    );
  }
}

export default App;
