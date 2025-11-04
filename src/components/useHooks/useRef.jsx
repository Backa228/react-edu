import { useRef, useState } from "react"
import ReactPlayer from 'react-player'

const UseRef = ({ source }) => {
    // const [value, setValue] = useState(0);
    //   const btnRef = useRef();

    //   // Буде undefined на першому рендері
    //   // і посиланням на DOM-елемент всі наступні
    //   console.log("App: ", btnRef.current);

    //   useEffect(() => {
    //     // Ефект виконується після монтування,
    //     // тому завжди буде посиланням на DOM-елемент
    //     console.log("useEffect: ", btnRef.current);
    //   });

    //   const handleClick = () => {
    //     // Кліки будуть після монтування,
    //     // тому завжди буде посиланням на DOM-елемент
    //     console.log("handleClick: ", btnRef.current);
    //   };

    //   return (
    //     <>
    //       <button onClick={() => setValue(value + 1)}>
    //         Update value to trigger re-render
    //       </button>
    //       <button ref={btnRef} onClick={handleClick}>
    //         Button with ref
    //       </button>
    //     </>
    //   );
    const [playing, setPlaying] = useState(false)
    const play = () =>
    {
        setPlaying(true)
        console.log('play')
    }
        // playerRef.current?.getInternalPlayer()?.playVideo()
    const pause = () =>
    {
        setPlaying(false)
        console.log('pause')
    }
        // playerRef.current?.getInternalPlayer()?.pauseVideo()

    return (
        <>
            <ReactPlayer
                playing={playing}
                // ref={playerRef}
                width='400'
                url={source}>    
            </ReactPlayer>

            <button onClick={play}>PAY</button>
            <button onClick={pause}>PAUSE</button>
        </>
    )

}
export default UseRef