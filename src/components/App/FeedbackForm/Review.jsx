import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

function Review() {
    const feedback = useSelector((store) => store.feedback)
    const history = useHistory();
    // Post
    function handleSubmit() {
        axios.post("/feedback", feedback)
            .then((res) =>
                console.log("feedback POST res:", res)
            )
            .catch((err) => console.log(err))

        history.push('/success')
    }

    return (<><Card variant="outlined" sx={{ maxWidth: 750, margin: '0 auto' }}>
        <CardContent>
            <h1>Review Your Feedback</h1>
            <div><b>Feeling:</b> {feedback.feeling}</div>
            <br />
            <div><b>Understanding:</b> {feedback.understanding}</div>
            <br />
            <div><b>Supported:</b> {feedback.support}</div>
            <br />
            <div><b>Comments:</b> {feedback.comments}</div>
        </CardContent>
        <br />
        <Button sx={{ marginTop: 2, marginBottom: 3 }} variant='contained' onClick={handleSubmit}>Submit Feedback</Button>
    </Card>
    </>)
}

export default Review;