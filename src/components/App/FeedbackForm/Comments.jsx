import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
    return (<><h1>Any comments you want to leave?</h1>
        <input type="text" onChange={(event) => setComment(event.target.value)} placeholder="Please leave a few words!" />
        <button onClick={saveComment}>Next</button>
    </>)
}

export default Comments;