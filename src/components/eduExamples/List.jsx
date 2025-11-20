import { people } from './data.js'
import { getImageUrl } from './utils.js'
import "./List.css"

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'хімік'
    )
    const listItems = chemists.map(person =>
        <li key={person.id} style={{
            fontSize: 16,
            color: "darkred",
            display: "flex",
            gap: 25,
        }}>
            <img src={getImageUrl(person.imageId)} alt={person.name} />
            <h2 className='text'>{person.name}</h2>
            <p>{person.profession +', ' + 'число працею є ' + person.accomplishment}</p>
        </li>

    ) 
    console.log(listItems);
    return <ul style={{
        listStyle: 'none',
        padding: "30px 35px",
        borderRadius: 15,
        border: "solid darkred 2px"
    }}>{listItems}</ul>
}
