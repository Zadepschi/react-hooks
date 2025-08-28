import { useContext } from "react";
import { Context } from "./Context";

function ComponentTwo() {
    const [context, setContext] = useContext(Context);
    return (
        <div className="context2">
    <p>Component 2</p>
    <p>{context}</p>
   
        </div>
    )
}

export default ComponentTwo;