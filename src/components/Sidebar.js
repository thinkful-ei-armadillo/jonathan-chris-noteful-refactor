import React, { Component } from 'react';
import Folder from './Folder';
import {Link} from 'react-router-dom';
import store from '../store';


class Sidebar extends Component {
    //console.log("SIDEBAR PROPS:", props);

    render() {
      return (
        <div>
          <ul className='FolderList'>
            {this.props.state.folders.map(folder =>
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
