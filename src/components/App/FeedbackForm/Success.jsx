import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import { TextField, Button } from "@mui/material";

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {
        dispatch({
            type: "CLEAR_FEEDBACK"
        })

        history.push("/")
    }
    return (<><Card variant='outlined' sx={{ maxWidth: 750, margin: '0 auto' }}>
        <CardContent>
            <h1>Thank You!</h1>
        </CardContent>
        <br />
        <Button sx={{ marginTop: 2, marginBottom: 3 }} variant='contained' onClick={handleClick}>Leave New Feedback</Button>
    </Card>
    </>)
}

export default Success