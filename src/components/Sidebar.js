import React, { Component } from 'react';
import Folder from './Folder';
import {Link} from 'react-router-dom';
import store from '../store';


export default function Sidebar(props) {
  
  
    console.log(props)
    return (
      <div>
        <ul className='FolderList'>
          {props.state.folders.map(folder =>
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

