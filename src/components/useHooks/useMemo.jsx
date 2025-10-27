import { useMemo, useState } from "react"

const UseMemo = () => {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Venus", "Jupiter", "Saturn"])
    const [qwery, setQuery] = useState('');
    const [clicks, setClicks] = useState(0);
    const [addPlanet, setAddPlanet] = useState("")
    const addPlanets = () => {
        setPlanets([...planets, addPlanet])
        setAddPlanet("")
    }

    const filteredPlanet = useMemo(() => {
        const q = qwery.toLowerCase()
        return planets.filter(planet => planet.toLowerCase().includes(q))
    }, [planets, qwery])

    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(num => num % 2 === 0); //умова фільтру = true, фільтр пропускає цей елемент
    
    console.log(evenNumbers);

    return (
        <>
            <button onClick={() => setClicks(clicks + 1)}>
                {`Clicked ${clicks} times`}
            </button>
            <hr />

            <input
                type="text"
                value={qwery}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search planets... "
            />
            <hr />

            <input
                type="text"
                value={addPlanet}
                onChange={(e) => setAddPlanet(e.target.value)}
                placeholder="Add planets... "
            />
            <hr />

            <button onClick={addPlanets}>
                Add planets
            </button>
            <hr />

            <ul>
                {filteredPlanet.map(planet => (
                    <li key={planet}>{planet}</li>
                ))}
            </ul>
        </>
    )
}
export default UseMemo