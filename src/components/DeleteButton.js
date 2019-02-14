import React from 'react'
import NoteContext from '../NoteContext';

class DeleteButton extends React.Component {
    static contextType = NoteContext;
    
    render() {
    const { deleteNote } = this.context;
        console.log(this.props)
        return (
            <button onClick={() => {
                deleteNote(this.props)
            }}>Delete</button>
        )
    }  
}

export default DeleteButton