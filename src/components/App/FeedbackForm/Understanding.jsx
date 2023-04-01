import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
    const [understanding, setUnderstanding] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();

    function saveUnderstanding() {
        dispatch({
            type: 'SAVE_FEEDBACK',
            payload: { understanding }
        })

        history.push("/supported")
    }
    return (<>
        <h1>How well are you understanding the content?</h1>
        <input type="number" onChange={(event) => setUnderstanding(event.target.value)} min="1" max="5" />
        <button onClick={saveUnderstanding}>Next</button>
    </>)
}

export default Understanding;