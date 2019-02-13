import React from 'react'

function DeleteButton(props){
    fetch('http://localhost:9090/notes', {
        method:'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })

    // DELETE request to the server
    // remove from state
    // redirect to main route 
    return(
        <button>Delete</button>
    )
}

export default DeleteButton