import React,{useState} from "react"
import CreateArea from "./CreateArea"
import HighlightIcon from '@material-ui/icons/Highlight'

import Note from "./Note"
import "./style.css"

function App()
{ 
    let year = new Date().getFullYear()
    const [note,setNote] = useState([])
    function addNote(note)
    {
       setNote(prevNote=>{return[...prevNote,note]})
       
    }
    function handleDelete(id)
    {
      setNote(prevNote=>{return prevNote.filter((noteItem,index)=>{return index !== id})})
    }
    return(
        <div>
            <header><h1><HighlightIcon/>Keeper</h1></header>
            <CreateArea
             onAdd={addNote}            
            />
            {note.map((item,index)=>{
                return <Note key={index} id={index} value={item} onDelete={handleDelete}/>
            })}
            <footer><p>Copyright © {year}</p></footer>
        </div>
    )
}

export default App