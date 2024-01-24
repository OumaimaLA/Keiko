import { PokemonImage } from './Domaine/PokemonImage';
import { PokemonCaracteristique } from './Domaine/PokemonProps';
import style from './Pokemon.module.css'

export const Pokemon = ({name, id, weight, height}: PokemonCaracteristique) => {
    return (
        <div className={style.PokemonContent}>
                <p>{name}</p>
                <PokemonImage type="" id={id} name={name} />
                <p>Number: {id}</p>
                <p>Weight: {weight} kg</p>
                <p>Height: {height} cm</p>
        </div>
    )
}
