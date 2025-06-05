import { useState } from 'react'

const Fruits = () => {
    const [items, setItems] = useState(["Груша", "Банан", "Яблуко"])
    const [newFruit, setNewFruit] = useState("")
    const addItem = () => {
        setItems([...items, newFruit])
        setNewFruit("")
    }

    return (
        <>
        <ul>
            {items.map((fruit, index) => 
            <li key={index}>{fruit}</li>
        )}
            </ul>
            <input type="text" value={newFruit} onChange={(e) => setNewFruit(e.target.value)}/>
            <button onClick={addItem}>Додай фрукт</button>
        </>
    )
}
export default Fruits