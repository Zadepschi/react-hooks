import { useContext } from "react";
import { Context } from "./Context";

function ComponentOne() {
    const [context, setContext] = useContext(Context);
    return (
        <div className="context1">
    <p>Componenet 1</p>
    <button onClick={() => setContext("Новое значение!!!!")}>Change text</button>
        </div>
    )
}

export default ComponentOne;