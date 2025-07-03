import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"; // In production, store in .env
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Helper to get headers with auth-token
  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn("No auth token found in localStorage.");
      return null;
    }

    return {
      'Content-Type': 'application/json',
      'auth-token': token,
    };
  };

  // 🔹 Get all notes
  
  const getNotes = async () => {
    const response = await fetch('http://localhost:5000/api/notes/fetchnotes', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'auth-token': localStorage.getItem('token') // 👈 this must exist
  },

});
const json = await response.json();
  setNotes(json);
  };
  // 🔹 Add a new note
  const addNote = async (title, description, tag) => {
    const headers = getAuthHeaders();
    if (!headers) return;

    try {
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message}`);
      }

      const newNote = await response.json();
      setNotes(notes.concat(newNote.savedNote));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // 🔹 Delete a note (Fixed bug here)
  const deleteNote = async (id) => {
    const headers = getAuthHeaders();
    if (!headers) return;

    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      // ✅ Fixed variable shadowing
      const updatedNotes = notes.filter((note) => note._id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // 🔹 Edit an existing note
  const editNote = async (id, title, description, tag) => {
    const headers = getAuthHeaders();
    if (!headers) return;

    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to update note");
      }

      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );

      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;


