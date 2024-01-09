import { Pokemon } from "components/Pokemon";
import styles from "./Home.module.css"
import { useState } from "react";

interface Pokemon {
  name: string
  id: number
}
export const Home = () => {
  const [pokemonFilterValue, setPokemonFilterValue] = useState<string>('');
  const [pokemonList] = useState<Pokemon[]>([
    {
      name: 'Carapuce',
      id: 7,
    },
    {
      name: 'Carbaffe',
      id: 8,
    },
    {
      name: 'Tortank',
      id: 9,
    },
  ]);
  
  // function filtre
  function filterPokemonsByName(pokemons: Pokemon[], name: string){
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
  };
  const filteredPokemonList = filterPokemonsByName(pokemonList, pokemonFilterValue);
  //List des pokemons
  const renderPokemonList = (list: Pokemon[]) => (
    <ul>
      {list.map((pokemon) => (
      <li key={pokemon.id}><Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} /></li>
      ))}
    </ul>
  );

  // change value input
  const onInputChangePokemon = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonFilterValue(event.target.value);
  };
  
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      {/* Rechercher */}
      <div><input className={styles.input} onChange={onInputChangePokemon} 
      value={pokemonFilterValue} placeholder="Rechercher..."/></div>
      
      {/* Liste des Pokémon */}
      {renderPokemonList(filteredPokemonList)}
    </div>
  )
}
