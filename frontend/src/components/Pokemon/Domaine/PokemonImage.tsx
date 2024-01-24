import { Animate } from "components/Animate";
import { SPRITES_BASE_URL } from "./Constant";
import { PokemonImageCaraceteristique } from "./PokemonProps";

const PokemonImageComponent: React.FC<PokemonImageCaraceteristique> = ({ type, id, name, isShiny = false}) => {
    const imageUrl = isShiny
        ? `${SPRITES_BASE_URL}/${type}/shiny/${id}.png`
        : `${SPRITES_BASE_URL}/${type}/${id}.png`;

    return (
        <div>
            <img src={imageUrl} alt={name} />
        </div>
    );
}

export const PokemonImage = Animate<PokemonImageCaraceteristique>('wobble')(PokemonImageComponent);
