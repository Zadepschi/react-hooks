import { useRef, useState } from 'react'
import './App.css'
import PreviousCount from './PreviousCount';
import Play from './Play';
import Reducer from './Reducer';
import Stopwatch from './Stopwatch';

function App() {
  const [city, setCity] = useState('');
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div className='container'>
  
      <div className='backRef'>
        <h2>useRef focus</h2>
        <input ref={inputRef} value={city} onChange={e => setCity(e.target.value)}/>
    <p>I want to go to {city}</p>
     <button onClick={focus}>UseRef</button>
      </div>

        <PreviousCount/>
        <Play/>
        <Reducer/>
        <Stopwatch/>

          
    </div>
  )
}

export default App
