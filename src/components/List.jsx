import { people } from './data.js'
import { getImageUrl } from './utils.js'

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'хімік'
    )
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img src={getImageUrl(person.imageId)} alt={person.name} />
            <h2>(person.name)</h2>
            <p>{person.profession +', ' + 'число працею є ' + person.accomplishment}</p>
        </li>

    ) 
    console.log(listItems);
    return <ul>(listItems)</ul>
}
