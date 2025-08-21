import { useReducer } from "react";

function reducer (state, action) {
    switch (action.type) {
        case 'Add': return {count: state.count + 1};
        case 'Substract': return { count: state.count - 1};
        default: return state;
    }
}



function Reducer() {
  const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <div className="backReducer">
            <h2>useReducer</h2>
        <p>{state.count}</p>
    <button onClick={() => dispatch({type: 'Add'})}>Add</button>
    <button onClick={() => dispatch({type: 'Substract'})}>Substract</button>
        </div>
    )
}

export default Reducer;