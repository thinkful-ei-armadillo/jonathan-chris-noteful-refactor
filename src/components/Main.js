import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Note from './Note';
import store from '../store'
class Main extends Component {
  render() {
    console.log(store)
    return (
      <main>
        <div>from Main.js</div>
        
        <Sidebar />
        <Note />
      </main>
      
    )
  }
}

export default Main;
