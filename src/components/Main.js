import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom'
import Note from './Note';


export default function Main(props) {
    console.log('MAIN PROPS: ', props);

    //let initial = props.match.params.length === 0 ? <p>test</p>:'';
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

