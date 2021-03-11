import React from "react"
import DeleteIcon from "@material-ui/icons/Delete"
function Note(props)
{
    function handleClick()
    {
        props.onDelete(props.id)
    }
    return(
        <div class="note">
            <h1>{props.value.title}</h1>
            <p>{props.value.content}</p>
            <button onClick={handleClick}><DeleteIcon/></button>
        </div>
    )
}

export default Note