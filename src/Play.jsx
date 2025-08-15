import { useRef, useState } from "react";
import song  from "../song.mp3";

function Play() {
  const [musicPlay, setMusicPlay] = useState(true);
const refAudio = useRef();

  const handlePlay = () => {
    setMusicPlay(!musicPlay)
    musicPlay ? refAudio.current.play() : refAudio.current.pause()
  }
    return (
        <div className="backSong">
         <audio src={song}
         loop="loop"
         ref={refAudio}>
         </audio>
         <button onClick={handlePlay}>{musicPlay ? "Play" : "Pause"}</button>
    
        </div>
    )
}

export default Play;