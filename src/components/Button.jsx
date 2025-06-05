// const Button = () => {
//     const handleClick = () => {
//         alert("Hello")
//     }
//     return <button onClick={handleClick}>Click me!</button>
// }
// export default Button


// const Button = () => {
//     return <button onClick={() => alert("Hello")}>Click me!</button>
// }
// export default Button


// const CustomButton = ({ message, children }) => {
//     return (
//         <button onClick={() => alert(message)}>
//         {children}
//         </button>
//     )
// }
// export default CustomButton

import { useState } from "react"
const Button = () => {
    // let clicks = 0
    const [ clicks, setClicks ] = useState(0)
    const handleClick = () => {
        setClicks(clicks + 1)
    }
    
    return <button onClick={handleClick}>Current: {clicks}</button>
}

export default Button
