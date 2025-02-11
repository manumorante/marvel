import Image from "next/image"
import { getMarvelCharacters } from "@/services/marvelApi"
import type { MarvelCharacter } from "@/types"

export default async function Home() {
  const { data } = await getMarvelCharacters()
  const characters = data.results

  return (
    <div>
      {characters.map((character: MarvelCharacter) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}

interface CharacterCardProps {
  character: MarvelCharacter
}

function CharacterCard({ character }: CharacterCardProps) {
  const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`

  return (
    <div>
      <Image src={imageUrl} alt={character.name} width={200} height={200} />
      <h2>{character.name}</h2>
      <p>{character.description || "No description available"}</p>
    </div>
  )
}
