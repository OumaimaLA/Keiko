import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from 'pages/Home/Home.module.css';
import { fetchPokemonDetails } from 'components/Pokemon/Data/FetchPokemons';
import { PokemonCaracteristique } from 'components/Pokemon/Domaine/PokemonProps';
import { PokemonImage } from '../Domaine/PokemonImage';

export const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<PokemonCaracteristique | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>('');

    
    useEffect(() => {
        const LoadPokemonDetail = async () => {
            try {
                const data = await fetchPokemonDetails(id);
                setPokemon(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erreur:', error);
                setError('Erreur lors de la récupération des données.');
                setIsLoading(false);
            }
        };
        LoadPokemonDetail();
    }, [id]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!pokemon) {
        return null;
    }

    return (
        <div className={styles.intro}>
        <h1>{pokemon.name}</h1>
            <div className={styles.centered}>
                <PokemonImage type="" id={pokemon.id} name={pokemon.name} />
                <PokemonImage type="back" id={pokemon.id} name={pokemon.name} />
            </div>
            <div className={styles.centered}>
                <PokemonImage type="" id={pokemon.id} name={pokemon.name} isShiny />
                <PokemonImage type="back" id={pokemon.id} name={pokemon.name} isShiny />
            </div>
            <p>Number: {pokemon.id}</p>
            <p>Weight: {pokemon.weight} kg</p>
            <p>Height: {pokemon.height} cm</p>
        </div>
    );
};

