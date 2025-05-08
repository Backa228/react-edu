//Gallery.jsx
import { getImageUrl } from './utils.js';

export default function Gallery({ name, imgId, profession, countAward, awards, discover }) {
  return (
    <div>
      <h1>Визначні вчені</h1>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imgId)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Професія: </b> 
                {/* фізик та хімік */}
                {profession}
          </li>
          <li>
            <b>Нагороди: {countAward} </b> 
            {awards}        
            {/* (Нобелівська премія з фізики, Нобелівська премія з хімії, Медаль Дейві, Медаль Маттеуччі) */}
          </li>
          <li>
            <b>Відкрито: </b>
            {discover}
            {/* полоній (хімічний елемент) */}
          </li>
        </ul>
      </section>
    </div>
  );
}
