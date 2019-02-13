import React from 'react';

const FolderContext = React.createContext({
  folders: [],
  setFolders: () => {}
});

export default FolderContext;
