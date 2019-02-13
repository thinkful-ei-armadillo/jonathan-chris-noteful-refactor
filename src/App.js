import React, { Component } from 'react';
import Folder from './components/Folder';
import Main from './components/Main';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import NoteContext from './NoteContext';
import store from './store';
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

  componentDidMount() {

    fetch('http://localhost:9090/folders')
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong with folders')
        }
        return res.json()
      })
      .then(foldersData => {
        console.log(foldersData)
        this.setState({
          folders: foldersData
        })
        console.log(this.state.folders)
      })
      
      fetch('http://localhost:9090/notes')
        .then(res => {
          if(!res.ok) {
            throw new Error('Something went wrong with notes')
          }
          return res.json()
        })
        .then(noteData => {
          this.setState({
            notes: noteData
          })
        })
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
            notes: this.state.notes
            deletenote: 
          }}>  
            <Route path='/note/:noteId' component={Note} />
            
            <Route path='/folders/:foldersId' component={Folder} />
            <Route exact path='/' render={this.showInitialPage} />
          </NoteContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
