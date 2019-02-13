import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Folder extends Component {
  
  render() {
    
    let notes = this.props.notes
      .filter(n => n.folderId === this.props.folder.id)
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
