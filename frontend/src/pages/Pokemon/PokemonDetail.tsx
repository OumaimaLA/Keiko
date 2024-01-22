
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from 'pages/Home/Home.module.css';

interface PokemonInfo {
    id: number;
    name: string;
    height: number;
    weight: number;
}
const PokemonImage = ({ type, id, name }: { type: string; id: number; name: string }) => (
    <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${type}/shiny/${id}.png`} alt={name} />
    </div>
);
export const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<PokemonInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>('');

    
    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/pokemon/${id}`);

                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données.');
                }

                const data = await response.json();
                setPokemon(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erreur:', error);
                setError('Erreur lors de la récupération des données.');
                setIsLoading(false);
            }
        };
        fetchPokemonDetails();
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
                <PokemonImage type="" id={pokemon.id} name={pokemon.name} />
                <PokemonImage type="back" id={pokemon.id} name={pokemon.name} />
            </div>
            <p>Number: {pokemon.id}</p>
            <p>Weight: {pokemon.weight} kg</p>
            <p>Height: {pokemon.height} cm</p>
        </div>
    );
};

