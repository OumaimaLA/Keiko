import { Pokemon } from './Pokemon';
import { PokemonListItem } from './PokemonListItem';
import styles from "pages/Home/Home.module.css"

interface PokemonListProps {
    pokemons: Pokemon[];
}

export const PokemonList: React.FC<PokemonListProps> = ({pokemons}) => (
    <div className={styles.flexcontent}>
        {pokemons.map((pokemon) => (
            <PokemonListItem key={pokemon.id} pokemon={pokemon} />
        ))}

    </div>
);
