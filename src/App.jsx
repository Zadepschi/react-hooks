import { useRef, useState } from 'react'
import './App.css'
import PreviousCount from './PreviousCount';
import Play from './Play';
import Reducer from './Reducer';
import Stopwatch from './Stopwatch';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import { Context } from './Context';
import ColorChange, { ColorContext } from './ColorChange';
import MyTheme from './MyTheme';
import MyTheme2 from './MyTheme2';
import Memo from './Memo';

function App() {
  const [city, setCity] = useState('');
  const inputRef = useRef();
  const [context, setContext] = useState("Первоначальное состояние");
  
  const [myColor, setMyColor] = useState(true);

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

        <Context.Provider value={[context, setContext]}>
            <ComponentOne/>
            <ComponentTwo/>
        </Context.Provider>
        <ColorContext.Provider value={[myColor, setMyColor]}>
          <ColorChange/>
          <MyTheme/>
          <MyTheme2/>
        </ColorContext.Provider>
        <Memo/>
    </div>
  )
}

export default App;
