import React from 'react';
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton';



export default class Main extends React.Component {
  render() {
    console.log('MAIN PROPS: ', this.props);

    let notes = this.props.notes.map(n => {

      return (

        <li key={n.id}>
          <Link to={`/note/${n.id}`}>{n.name}</Link>
          <p>{n.modified}</p>
          <DeleteButton />
        </li>

      );
    });

    return (
      <div>
        <h4>All Notes</h4>
        <ul>{notes}</ul>
      </div>
    );
  }
    
  }

  