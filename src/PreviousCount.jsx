import { useEffect, useRef, useState } from "react";

function PreviousCount() {
    const [count, setCount] = useState(0);

    const previousCountRef = useRef(0);
    const previousCount = previousCountRef.current;
    useEffect(() => {
        previousCountRef.current = count;
    } )

    return (
        <div className="back">
           <p>Current state: {count}</p>
           <p>Previous state:{previousCount}</p>
           <button onClick={() => setCount(count +1)}>Click here</button>
        </div>
    )
}

export default PreviousCount;