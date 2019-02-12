import React, { Component } from 'react';

import {Link} from 'react-router-dom';



class Sidebar extends Component {

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
