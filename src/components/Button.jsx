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

const Button = ({ value, onUpdate }) => {
    
    return <button onClick={onUpdate}>Current: {value}</button>
}

export default Button
