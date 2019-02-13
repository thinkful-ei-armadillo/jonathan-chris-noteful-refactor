import React from 'react';
import NoteContext from '../NoteContext';

export default class Note extends React.Component {

  static contextType = NoteContext;

  render() {

    const { notes } = this.context
    const noteId = this.props.match.params.noteId
    const note = notes.find(n => n.id === noteId)

    return (
      <div>
        <h3>{note.name}</h3>
        <p>{note.modified}</p>
        <p>{note.content}</p>
      </div>
    )
  }
  
} 
  
