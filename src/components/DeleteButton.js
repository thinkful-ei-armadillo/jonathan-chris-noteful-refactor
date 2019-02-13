import React from 'react'
import NoteContext from '../NoteContext';

class DeleteButton extends React.Component {
    static contextType = NoteContext;
    
    render() {
        console.log(this.props)
        const { deleteNote } = this.context;
        console.log(deleteNote)
        const noteId = this.props;
        this.setState({})

        
        return (
            <button onClick={() => deleteNote()}>Delete</button>
        )
    }
    
}

export default DeleteButton