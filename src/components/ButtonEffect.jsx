import { useEffect, useState } from 'react'

const Button = () => {
    // const [clicks, setClicks] = useState(0)
    
    // useEffect(() => {
    //     // document.title = `You clicked ${clicks} times`
    //     console.log('Hello')
    // })

    // return <button onClick={() => setClicks(clicks + 1)} >Current: { clicks }</button>
    useEffect(() => {
        // const inter = setInterval(() => {
        //     console.log(`Interval - ${Data.now()}`)
        // }, 2000)  
        return () => {
            // clearInterval(inter)
        }
    }, [])
}

export default Button