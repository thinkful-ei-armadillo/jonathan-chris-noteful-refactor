import React from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';

export default class Note extends React.Component {
  static contextType = NoteContext;
  render() {
    const { notes } = this.context
    console.log(notes, this.props)
    return (
      <div>
        <h3>{this.props.note.name}</h3>
        <p>{this.props.note.modified}</p>
        <p>{this.props.note.content}</p>
      </div>
    )
  }
  
} 
  
