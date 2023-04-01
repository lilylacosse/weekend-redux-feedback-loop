import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Supported() {
    const [support, setSupported] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();

    function saveSupported() {
        dispatch({
            type: 'SAVE_FEEDBACK',
            payload: { support }
        })

        history.push("/comments")
    }
    return (<>
        <h1>How well are you being supported?</h1>
        <input type="number" onChange={(event) => setSupported(event.target.value)} min="1" max="5" />
        <button onClick={saveSupported}>Next</button>
    </>)
}

export default Supported;