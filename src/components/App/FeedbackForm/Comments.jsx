import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import { TextField, Button } from "@mui/material";
import swal from 'sweetalert';

function Comments() {
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();

    function saveComment() {
        dispatch({
            type: 'SAVE_FEEDBACK',
            payload: { comment }
        })

        history.push("/review")
    }
    return (<><Card variant="outlined" sx={{ maxWidth: 750, margin: '0 auto' }}>
        <CardContent>
            <h1>Any comments you want to leave?</h1>
        </CardContent>
        <TextField variant='outlined' sx={{ width: '90%' }} label='Please leave a few words!' onChange={(event) => setComment(event.target.value)} />
        <br />
        <Button sx={{ marginTop: 2, marginBottom: 3 }} variant='contained' onClick={saveComment}>Next</Button>


    </Card>

    </>)
}

export default Comments;