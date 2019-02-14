import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';



class Sidebar extends Component {
    render() {
      
      return (
        !this.props.error ?

        <div className='sidebar'>
          <ul>
            {this.props.state.folders.map(folder =>
              <li key={folder.id}>
                <NavLink to={`/folders/${folder.id}`} >
                  {folder.name}
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        :
        
        <div>{this.props.error}</div>
          
      )
    }
  }

  export default Sidebar;
