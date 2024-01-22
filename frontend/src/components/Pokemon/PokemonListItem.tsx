import { Pokemon } from './Pokemon';

interface PokemonListItemProps {
    pokemon: Pokemon;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ pokemon }) => (
    <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} height={pokemon.height} weight={pokemon.weight} />
);
