import React,{useState} from "react"
import AddIcon from "@material-ui/icons/Add"
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function CreateArea(props)
{
 const [isExpanded,setExpanded] = useState(false)
 const [note,setNote] = useState({title: "",content:""})

 function handleChange(event)
 {
   const { name, value } = event.target
   setNote((prevnote)=>{
       return {
           ...prevnote,
           [name]: value

       }
   })
 }
function submitNote(event)
{
    props.onAdd(note)
   event.preventDefault()

}
function handleExpand()
{
    setExpanded(true)
}
return(
    <div>
        <form className="create-note">
        {isExpanded && <input type="text" onChange={handleChange} name="title" placeholder="Enter Title" value={note.title}/>}
        <textarea name="content" onClick={handleExpand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
       <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
        </form>

    </div>
)

}
export default CreateArea