import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Review() {
    const feedback = useSelector((store) => store.feedback)
    const dispatch = useDispatch();
    const history = useHistory()
    // Post
    function handleSubmit() {
        axios.post("/feedback", feedback)
            .then((res) =>
                console.log("feedback POST res:", res)
            )
            .catch((err) => console.log(err))

        history.push('/success')
    }

    return (<>
        <h1>Review Your Feedback</h1>
        <div>Feeling: {feedback.feeling}</div>
        <div>Understanding: {feedback.understanding}</div>
        <div>Supported: {feedback.supported}</div>
        <div>Comments: {feedback.comment}</div>
        <br />
        <button onClick={handleSubmit}>Submit Feedback</button>
    </>)
}

export default Review;