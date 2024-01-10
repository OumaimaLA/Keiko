import { Pokemon } from "components/Pokemon";
import styles from "./Home.module.css"
import { useState, useEffect } from "react";

interface Pokemon {
  name: string
  id: number
  height: number
  weight: number
}

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}
export const Home = () => {
  const [pokemonFilterValue, setPokemonFilterValue] = useState<string>('');
  
  useEffect(() => {
    fetchPokemons();
  }, []);
  
  const [pokemonList, updatePokemonList ] = useState<PokemonInfo[]>([]);
  
  // function filtre
  function filterPokemonsByName(pokemons: Pokemon[], name: string){
    return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
  };
  const filteredPokemonList = filterPokemonsByName(pokemonList, pokemonFilterValue);
  //List des pokemons
  const renderPokemonList = (list: Pokemon[]) => (
    <div className={styles.flexcontent}>
      {list.map((pokemon) => (
        <Pokemon name={pokemon.name} id={pokemon.id} height={pokemon.height} weight={pokemon.weight}/>
      ))}
    </div>
  );
  // Fonction
  const fetchPokemons = () => {
    fetch('http://localhost:8000/pokemons')
    .then((response) => {
      if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données.');
      }
      return response.json();
    })
    .then((data) => {
      updatePokemonList(data);
    })
    .catch((error) => {
      console.error('Erreur:', error);
    })
  } 
  return (

    <div className={styles.intro}>
      <h1>Pokedex</h1>
      {/* Rechercher */}
      
      {/* Liste des Pokémon */}
      {renderPokemonList(filteredPokemonList)}

    </div>
  )
}
