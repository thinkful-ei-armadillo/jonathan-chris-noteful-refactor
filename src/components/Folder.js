import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';


class Folder extends Component {
  static contextType = NoteContext;

  render() {
    let { notes } = this.context;
    const folderId = this.props.match.params.foldersId

    console.log(this.props, folderId, notes)
    

    notes = notes.filter(n => n.folderId === folderId)
      .map(n => {
        return (
          <li key={n.id}>
            <Link to={`/note/${n.id}`}>{n.name}</Link>
            <p>{n.modified}</p>
          </li>);
      });

    return (
      <div>
        <ul>{notes}</ul>
      </div>
    )
  }
}

export default Folder
