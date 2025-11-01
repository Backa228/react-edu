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
    const playerRef = useRef(null)
    const play = () => playerRef.current?.getInternalPlayer()?.playVideo()
    const pause = () => playerRef.current?.getInternalPlayer()?.pauseVideo()

    return (
        <>
            <video
                ref={playerRef}
                width='400'
                url={source}>    
            </video>

            <button onClick={play}>PAY</button>
            <button onClick={pause}>PAUSE</button>
        </>
    )

}
export default UseRef