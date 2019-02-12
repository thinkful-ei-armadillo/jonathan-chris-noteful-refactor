import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
  return (
    <div>
      <Link to={`/folders/${props.note.folderId}`}>Back</Link>
      <h3>{props.note.name}</h3>
      <p>{props.note.modified}</p>
      <p>{props.note.content}</p>
    </div>
  )
} 
  
