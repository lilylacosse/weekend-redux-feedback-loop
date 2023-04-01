import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
    const [feeling, setFeeling] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();

    function saveFeeling() {
        dispatch({
            type: 'SAVE_FEEDBACK',
            payload: { feeling }
        })

        history.push("/understanding")
    }
    return (<>
        <h1>How are you feeling today?</h1>
        <input type="number" onChange={(event) => setFeeling(event.target.value)} min="1" max="5" />
        <button onClick={saveFeeling}>Next</button>
    </>)
}

export default Feeling;