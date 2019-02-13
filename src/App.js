import React, { Component } from 'react';
import Folder from './components/Folder';
import Main from './components/Main';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import NoteContext from './NoteContext';
import store from './store'
import { Route, Link } from 'react-router-dom';
import './App.css';


class App extends Component {
  state = {
    notes: store.notes,
    folders: store.folders,
  }

  showInitialPage = (e) => {
    return <Main props={e} notes={this.state.notes} />;
  }

  showFolder = (e) => {
    let folder = this.state.folders.find(f => f.id === e.match.params.foldersId);

    return <Folder folder={folder} notes={this.state.notes} />;
  }

  showNote = (e) => {
    let noteId = this.state.notes.find(n => n.id === e.match.params.noteId);
    
    return <Note note={noteId} />
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="notefulContainer">
          <Sidebar state={this.state} setFolder={this.setFolder} />

          <NoteContext.Provider value={{
            notes: this.state.notes,
            setNotes: notes => this.setState({notes})
          }}
          >  
            <Route path='/note/:noteId' render={this.showNote} />
          </NoteContext.Provider>
          
          <Route path='/folders/:foldersId' render={this.showFolder} />
          <Route exact path='/' render={this.showInitialPage} /> 
        </div>
      </div>
    );
  }
}

export default App;
