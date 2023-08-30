import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';
import { Box } from '@mui/material';
import Notes from './Components/Notes';
import NoteObject from './Models/model';

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);
  useEffect(()=>{
    if(sessionStorage.getItem('notes')){
      setNotes(JSON.parse(sessionStorage.getItem('notes')as string));
    }
  },[])

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem('notes',JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes',JSON.stringify(updatedNotes));
  };

  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} /> {/* Change 'notes' to 'noteList' */}
      </Box>
    </>
  );
}

export default App;
