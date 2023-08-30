import React, { useState } from "react";
import { Box, Button, InputBase, styled, Typography } from "@mui/material";
import NoteObject from "../Models/model"
import {v4 as uuid } from 'uuid';
const Container = styled(Box)`
& > * {
  margin: 20px 10px 20px 5px;
}
& > div > input[type="text"] {
  border-bottom: 1px solid #111111;
  opacity: 0.7;
  width: 300px;
  padding-right: 5px;
}
& > div > input[type="color"] {
  width: 40px;
  padding: 5px;
  height: 30px;
  position: relative;
  bottom: -10px;
}`
  

const defaultObj:NoteObject={
    id:0,
    title:'',
    details:'',
    color:'',
    date:(new Date().toLocaleString.toString()),
}

interface ICreateNoteProps {
  addNotes:(note:NoteObject)=>void
}

const CreateNote:React.FC<ICreateNoteProps> = ({addNotes}) => {
    const[ note,setNote]=useState<NoteObject>(defaultObj)
    const [error,setError]=useState<string>('');
   
    const onValueChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      if(error){
        setError('');
      }
      setNote({...note,[e.target.name]:e.target.value})
    }
    const onCreateNote=()=>{
      if(!note.details && note.title){
        setError('All fields are mandatory')
      }
      addNotes({...note,id:uuid()})    
      setNote(defaultObj)  
    }
    
  return (
    <Container>
      <InputBase
        placeholder="title"
        onChange={(e) => onValueChange(e)}
        name="title"
      />
      <Box component="span">30</Box>
      <InputBase
        placeholder="Details"
        onChange={(e) => onValueChange(e)}
        name="Details"
      />
      <Box component="span">50</Box>
      <InputBase
        type="color"
        defaultValue={"#F5F5F5"}
        placeholder="Color"
        onChange={(e) => onValueChange(e)}
        name="Color"
      />
      <Button variant="outlined" onClick={onCreateNote}>Create</Button>
       <Typography>{error}</Typography>
    </Container>
  );
};

export default CreateNote;
