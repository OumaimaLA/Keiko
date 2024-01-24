import { PokemonImage } from './Domaine/PokemonImage';
import { PokemonInfoProps } from './Domaine/PokemonProps';
import style from './Pokemon.module.css'

export const Pokemon = ({name, id, weight, height}: PokemonInfoProps) => {
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
