
import { Box, CardContent,Typography,Card,Button } from "@mui/material"
import NoteObject from "../Models/model"
import styled from "@emotion/styled"
interface INoteprops{
    note:NoteObject
    deleteNote: (id: number) => void;
}
const StyledCard=styled(Card)`
width:400px;
margin:20px;
`
const Wrapper=styled(Box)`
    & > button{
        border:1px solid black;
        backgroundColor:#fff;
        margin-top:5px;
    }`
const Note:React.FC<INoteprops>=({note})=>{
    return (
        <StyledCard style={{backgroundColor:note.color}}>
            <CardContent>
                <Wrapper>
                    <Typography>
                        {note.title}
                    </Typography>
                    <Typography>
                        {note.details}
                    </Typography>
                    <Typography>
                        {note.date}
                    </Typography>
                    <Button variant="outlined">Delete</Button>
                </Wrapper>
            </CardContent>
        </StyledCard>
    )
}
export default Note