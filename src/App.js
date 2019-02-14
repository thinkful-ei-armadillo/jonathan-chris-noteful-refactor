import React, { Component } from 'react';
import Folder from './components/Folder';
import Main from './components/Main';
import Note from './components/Note';
import Sidebar from './components/Sidebar';
import NoteContext from './NoteContext';
import store from './store';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';


class App extends Component {
  state = {
    notes: [],
    folders: [],
    delRedirect: false
  }

  showInitialPage = (e) => {
    
    return <Main props={e} notes={this.state.notes} />
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
      })
      .catch(err => <Sidebar error={err} />)
      
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
        .catch(err => <Main error={err} />)
  }

  deleteNote = (noteId) => {
    console.log(noteId)
    const id = Object.values(noteId)
    console.log(id[0])
    const newNotes = this.state.notes.filter(n => n.id !== id[0])
    this.setState({
      notes: newNotes
    })
    this.setState({
      delRedirect: !this.state.delRedirect
    })
    console.log(this.state.delRedirect)

    fetch(`http://localhost:9090/notes/${id[0]}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error('something went wrong with delete')
      }
      return res.json()
    })
    .then(res => {
      const newNotes = this.state.notes.filter(n => n.id !== id[0])
      this.setState({
        notes: newNotes
      })
      this.setState({
        delRedirect: !this.state.delRedirect
      })
      return res.json();
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
            notes: this.state.notes,
            deleteNote: this.deleteNote

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
