import React from 'react';


export default function Note(props) {
  
  return (
    <div>
      <p>{props.note.name}</p>
      <p>{props.note.modified}</p>
      <p>{props.note.content}</p>
    </div>
  )
} 
  
