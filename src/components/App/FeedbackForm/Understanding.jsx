import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import { Rating, Button } from "@mui/material";
import swal from 'sweetalert';

function Understanding() {
    const [understanding, setUnderstanding] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();

    function saveUnderstanding() {
        if (understanding > 0) {
            dispatch({
                type: 'SAVE_FEEDBACK',
                payload: { understanding }
            })

            history.push("/supported")
        } else { swal({ title: "Please enter a rating!", text: "Thank you" }) }
    }
    return (<>
        <Card variant="outlined" sx={{ maxWidth: 750, margin: '0 auto' }}>
            <CardContent>
                <h1>How well are you understanding the content?</h1>
            </CardContent>

            <Rating name='understanding' onChange={(event) => setUnderstanding(event.target.value)} />
            <br />
            <Button sx={{ marginTop: 2, marginBottom: 3 }} variant='contained' onClick={saveUnderstanding}>Next</Button>
        </Card>

    </>)
}

export default Understanding;