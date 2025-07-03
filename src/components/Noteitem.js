
import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote}= context;
  const {note, updateNote}= props;

  return (
    <div className='col-md-3 '>
      <div className="card my-3 " style={{background:"#adb5bd"}}>
         <div className="card-body">
        
            <div className="d-flex aling-items-center">
          <h5 className="card-title" style={{color:"white"}}>{note.title}</h5>
           <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfully", "Success")}}></i>
          <i className="far fa-edit mx-2" onClick={()=>{updateNote(note); }}></i>
            </div>
          <p className="card-text" style={{color:"white"}}>{note.description}</p>
          <a href="/" style={{color:"white", textDecoration:"none"}}>{note.tag}</a>
          </div>
      </div>
    </div>
  )
}

export default Noteitem


