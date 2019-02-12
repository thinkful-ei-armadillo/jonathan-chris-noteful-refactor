import React, { Component } from 'react';
import Folder from './Folder';
import {Link} from 'react-router-dom';
import store from '../store';


class Sidebar extends Component {
  
  render() {
    console.log(store)
    return (
      <div>
        <div>from sidebar.js</div>
        <ul className='FolderList'>
          {store.folders.map(folder => 
            <li key={folder.id}>
              <Link to={`/folders/${folder.id}`} >
                {folder.name}
              </Link>
            </li>
            )}
        </ul>
        
      </div>
    )
  }
}

export default Sidebar;
