import Card from './Card.jsx';


export default function Cards({characters}) {
  console.log(characters)
   return (
    <>
      {characters.map((character) =>
        <Card 
          key={character.id}
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
        />
      )}
    </>
    )
}
