import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import { Rating, Button } from "@mui/material";
import swal from 'sweetalert';


function Feeling() {
    const [feeling, setFeeling] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();

    function saveFeeling() {
        if (feeling > 0) {
            dispatch({
                type: 'SAVE_FEEDBACK',
                payload: { feeling }
            })

            history.push("/understanding")
        } else { swal({ title: "Please enter a rating!", text: "Thank you" }) }
    }
    return (<><Card variant="outlined" sx={{ maxWidth: 750, margin: '0 auto' }}>
        <CardContent>
            <h1>How are you feeling today?</h1>
        </CardContent>

        <Rating name='feeling' onChange={(event) => setFeeling(event.target.value)} />
        <br />
        <Button sx={{ marginTop: 2, marginBottom: 3 }} variant='contained' onClick={saveFeeling}>Next</Button>


    </Card>
    </>)
}

export default Feeling;