import { Pokemon } from '../../Pokemon';
import { PokemonInfoProps } from '../../Domaine/PokemonProps';

interface PokemonListItemProps {
    pokemon: PokemonInfoProps;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({ pokemon }) => (
    <Pokemon key={pokemon.id} name={pokemon.name} id={pokemon.id} height={pokemon.height} weight={pokemon.weight} />
);
