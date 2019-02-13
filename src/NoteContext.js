import React from 'react';

const NoteContext = React.createContext({
  notes: [],
  deletenote: () => {}
})

export default NoteContext;
