import { useMemo, useState } from "react"

const UseMemo = () => {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Venus", "Jupiter", "Saturn"])
    const [qwery, setQuery] = useState('');
    const [clicks, setClicks] = useState(0);

    const filteredPlanet = useMemo(() => {
        const q = qwery.toLowerCase()
        return planets.filter(planet => planet.toLowerCase().includes(q))
    }, [planets, qwery])

    return (
        <>
            <ul>
                {filteredPlanet.map(planet => (
                    <li key={planet}>{planet}</li>
                ))}
            </ul>
        </>
    )
}
export default useMemo