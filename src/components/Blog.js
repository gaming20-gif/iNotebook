import React, { useState, useEffect } from "react"
import '../App.css';
const Blog = () => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const searchNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className=" mt-5 ">
      <form 
        className="d-flex  mb-4" 
        role="search"
        onSubmit={(e) => e.preventDefault()}
        style={{ backgroundColor: "transparent" ,  marginRight: "20px", marginLeft:"20px", alignItems:"center", justifyContent:"center"}}>
          
        <input
          className=" form-control me-1"
          type="search"
          placeholder="Search the Title"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
            style={{
      backgroundColor: "transparent",
      border: "1px solid #ccc", 
      color: "#000", 
      
    }}
        />
        <button className="btn btn-outline-secondary"  type="submit">
          Search
        </button>
      </form>
   
 
 
 
 {/* <div className="container" >
  <div className="row">
    {Array.isArray(searchNotes) &&
      searchNotes.map((note) => (
        <div className="col-6 col-sm-6 col-lg-4 mb-4" key={note._id}>
          <div className="card bg-secondary-subtle h-100">
            <div className="card-body text-center">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <p className="card-text">{note.tag}</p>
            </div>
          </div>
        </div>
      ))}
  </div>
</div> */}
   
   <div className="container">
  <div className="row">
    {Array.isArray(searchNotes) &&
      searchNotes.map((note) => (
        <div className="col-lg-4 mb-4" key={note._id}>
          <div className="card bg-secondary-subtle w-auto h-auto">
            <div className="card-body text-center">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.description}</p>
              <p className="card-text">{note.tag}</p>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>


    </div>

  );
};

export default Blog;
