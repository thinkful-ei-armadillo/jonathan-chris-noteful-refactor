import React from 'react';
import {Link} from 'react-router-dom'



export default function Main(props) {
    console.log('MAIN PROPS: ', props);

    let notes = props.notes.map(n => {
      return (
        <li key={n.id}>
          <Link to={`/note/${n.id}`}>{n.name}</Link>
          <p>{n.modified}</p>
        </li>
      );
    });

    return (
      <div>
        <h4>All Notes</h4>
        <ul>{notes}</ul>
      </div>
    );
  }

