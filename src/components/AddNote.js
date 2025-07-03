import React, { useState, useContext } from 'react';
import noteContext from '../context/notes/noteContext';
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag:"" });

  const handleClick = (e) => {
       e.preventDefault()
       addNote(note.title, note.description , note.tag)
       setNote({ title: "", description: "", tag:"" })
       props.showAlert('Added successfully', "Success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const color = {
     color: "#2c2c2c",
  }
  return (
    <div className="container my-3 mt-5">
      <h2 style={color}>Create Your Notes</h2>
      <form className="my-3">
        <div className="mb-3">
          <input type="text" className="form-control" id="title" placeholder='Enter Your Tilte' name="title" value={note.title} onChange={onChange} minLength={3}required/>
        </div>
          <div className="mb-3">
                  <textarea
                  placeholder='Enter Your Description'
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    minLength={5}
                    required
                    rows={4}
                    cols={50}
                    onChange={onChange}
                  />
                </div>
        <div className="mb-3">
          <input type="text" placeholder='Enter Your Tag' className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={3}required/>
        </div>
        <button type="submit" disabled={note.title.length<3 || note.description<5} className="btn btn-secondary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;