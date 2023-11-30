
import data from "../data";
export default function Cards() {
   const character = data.id;
   const Card = data.map((character) =>
     <li key={character.toString()}>
       {character}
     </li>
   );
   return <div>
    <li>
      <Card 
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image}
      onClose={() =>
        window.alert(`Emulamos que se cierra la card de ${character.name}`)
      }
      ></Card>{character}</li>
   </div>;
}
