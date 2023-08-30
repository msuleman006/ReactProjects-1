import React from 'react';
import NoteObject from '../Models/model';
import Note from './Note';

interface INoteProps {
  notes: NoteObject[]; // Change this to an array of NoteObject[]
  deleteNote: (id: number) => void;
}

const Notes: React.FC<INoteProps> = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} deleteNote={deleteNote} /> 
      ))}
    </div>
  );
};

export default Notes;
