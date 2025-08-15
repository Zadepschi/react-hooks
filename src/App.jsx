import { useRef, useState } from 'react'
import './App.css'
import PreviousCount from './PreviousCount';
import Play from './Play';

function App() {
  const [city, setCity] = useState('');
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
  
      <div className='backRef'>
        <input ref={inputRef} value={city} onChange={e => setCity(e.target.value)}/>
    <p>I want to go to {city}</p>
     <button onClick={focus}>UseRef</button>
      </div>
      <div>
        <PreviousCount/>
        <Play/>
      </div>
          
    </div>
  )
}

export default App
