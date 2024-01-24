import { useState, useEffect } from "react";
import { PokemonList } from "./PokemonList/PokemonList";
import { Loader } from "components/Loader";
import { PokemonCaracteristique } from "../Domaine/PokemonProps";
import { fetchPokemons } from "../Data/FetchPokemons";

interface PokemonApiProps {
    page: number;
}

export const Pokedex: React.FC<PokemonApiProps> = ({ page }) => {
    const [pokemonList, setPokemonList] = useState<PokemonCaracteristique[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>('');
    
    useEffect(() => {
        LoadPokemonList();
    }, [page]);


    const LoadPokemonList = async () => {
        try {
            const data = await fetchPokemons(page);
            setPokemonList(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Erreur:', error)
            setError('Erreur lors de la récupération des données.');
            setIsLoading(false);
        }
    }
    return (
        <div>
            {isLoading ? <Loader />: error ? <p>{error}</p> : <PokemonList pokemons={pokemonList} />}
        </div>
    );
};



