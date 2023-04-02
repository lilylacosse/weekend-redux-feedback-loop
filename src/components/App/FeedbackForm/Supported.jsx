import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import { Rating, Button } from "@mui/material";
import swal from 'sweetalert';

function Supported() {
    const [support, setSupported] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();

    function saveSupported() {
        if (support > 0) {
            dispatch({
                type: 'SAVE_FEEDBACK',
                payload: { support }
            })

            history.push("/comments")
        } else { swal({ title: "Please enter a rating!", text: "Thank you" }) }
    }
    return (<><Card variant="outlined" sx={{ maxWidth: 750, margin: '0 auto' }}>
        <CardContent>
            <h1>How well are you being supported?</h1>
        </CardContent>
        <Rating name='feeling' onChange={(event) => setSupported(event.target.value)} />
        <br />
        <Button sx={{ marginTop: 2, marginBottom: 3 }} variant='contained' onClick={saveSupported}>Next</Button>
    </Card>

    </>)
}

export default Supported;