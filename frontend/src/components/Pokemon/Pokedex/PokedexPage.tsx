import { useState, useEffect } from "react";
import { PokemonList } from "./PokemonList/PokemonList";
import { Loader } from "components/Loader";
import { PokemonInfoProps } from "../Domaine/PokemonProps";
import { fetchPokemons } from "../Data/FetchPokemons";
import { Animate } from "components/Animate/Animate";

interface PokemonApiProps {
    page: number;
}

const PokemonComponent: React.FC<PokemonApiProps> = ({ page }) => {
    const [pokemonList, setPokemonList] = useState<PokemonInfoProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>('');
    
    useEffect(() => {
        fetchData();
    }, [page]);


    const fetchData = async () => {
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
export const PokedexPage = Animate<PokemonApiProps>('wobble')(PokemonComponent);



