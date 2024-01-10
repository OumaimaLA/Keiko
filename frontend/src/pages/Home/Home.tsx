import { Pokemon } from "components/Pokemon";
import styles from "./Home.module.css"
import { useState, useEffect } from "react";

interface Pokemon {
  name: string
  id: number
}

interface PokemonInfo {
  id: number
  name: string
  heigth: number
  weght: number
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
