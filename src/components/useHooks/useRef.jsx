import { useRef, useState } from "react"

const UseRemo = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)

    const handleClick = () => {
        setCount(count + 1)
        // countRef.current = countRef.current + 1;
        countRef.current += 1
        console.log('State count:', count)
        console.log('Ref count:', countRef.current)
    }
    return (
        <>
            
        </>
    )
}

export default UseRef