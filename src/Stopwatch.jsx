import { useEffect, useReducer, useRef } from "react";

  function reducer(state, action) {
  switch (action.type) {
    case "START": 
      return {...state, isTicking: true };
    case "PAUSE":
         return {...state, isTicking: false};
   case "RESET":
     return {clock: 0, isTicking: false};
   case "TICK":
     return {...state, clock: state.clock +1} ;
     default: return state;      
  }
  }
  
  
  const initialState = {
        clock: 0,
        isTicking:  false 
    }

function Stopwatch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const myTimerRef = useRef(0);
 

  useEffect(() => {
    if (!state.isTicking) {
        return
    }
    myTimerRef.current = setInterval(() => dispatch({type: "TICK"}), 1000);
    return () => {
        clearInterval(myTimerRef.current);
        myTimerRef.current = 0;
    }
  }, [state.isTicking])

    return (
        <div className="backStopwatch">
            <h2>Stopwatch</h2>
            <p>{state.clock} seconds</p>
            <button onClick={() => dispatch({type: "START"})}>Start</button>
            <button onClick={() => dispatch({type: "PAUSE"})}>Pause</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>

        </div>
    )
}

export default Stopwatch;