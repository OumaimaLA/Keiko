import { Sprites_Base_Url } from "./Constant";
import { PokemonImageProps } from "./PokemonProps";

export const PokemonImage: React.FC<PokemonImageProps> = ({ type, id, name, isShiny = false}) => {
    const imageUrl = isShiny
        ? `${Sprites_Base_Url}/${type}/shiny/${id}.png`
        : `${Sprites_Base_Url}/${type}/${id}.png`;

    return (
        <div>
            <img src={imageUrl} alt={name} />
        </div>
    );
}
