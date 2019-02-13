import React from 'react';

const NoteContext = React.createContext({
  notes: [],
  setNotes: () => {}
})

export default NoteContext;
