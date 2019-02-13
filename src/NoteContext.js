import React from 'react';

const NoteContext = React.createContext({
  notes: [],
  deleteNote: () => {}
})

export default NoteContext;
