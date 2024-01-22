import { useState, useEffect } from "react";
import { PokemonList } from "./PokemonList";
import { Loader } from "components/Loader";
import styles from "pages/Home/Home.module.css"

interface PokemonInfo {
    id: number;
    name: string;
    height: number;
    weight: number;
}

export const PokemonApi = () => {
    const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>('');
    
    useEffect(() => {
        fetchPokemons();
    }, []);


    const fetchPokemons = async () => {
        try {
            const response = await fetch('http://localhost:8000/pokemons')
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données.');
            }

            const data = await response.json();
            setPokemonList(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Erreur:', error)
            setError('Erreur lors de la récupération des données.');
            setIsLoading(false);
        }
    }
    return (
        <div className={styles.intro}>
            <h1>Pokedex</h1>
            {isLoading ? <Loader />: error ? <p>{error}</p> : <PokemonList pokemons={pokemonList} />}
        </div>
    );
};


