import { Pokemon } from './Pokemon';
import { PokemonListItem } from './PokemonListItem';
import styles from "pages/Home/Home.module.css"
import style from "./Pokemon.module.css"
import { Link } from 'react-router-dom';

interface PokemonListProps {
    pokemons: Pokemon[];
}

export const PokemonList: React.FC<PokemonListProps> = ({pokemons}) => (
    <div className={styles.flexcontent}>
        {pokemons.map((pokemon) => (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`} className={style.PokemonContent}>
            <PokemonListItem key={pokemon.id} pokemon={pokemon} />
            </Link>
        ))}
    </div>
);
