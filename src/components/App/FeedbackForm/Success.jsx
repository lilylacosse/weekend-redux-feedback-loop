import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {
        dispatch({
            type: "CLEAR_FEEDBACK"
        })

        history.push("/")
    }
    return (<><h1>Thank You!</h1>
        <br />
        <button onClick={handleClick}>Leave New Feedback</button>
    </>)
}

export default Success