import React, { Component } from 'react';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom'
import Note from './Note';


export default function Main(props) {
    console.log(props)
    return (
      <main>
        <ul>
          {props.state.map(note => 
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name}
              </Link>
            </li>
            )}
        </ul>

        
      </main>
      
    )
  }

