import style from './Pokemon.module.css'
interface Props {
    name: string;
    id: number;
    weight: number;
    height: number;
}

export const Pokemon = ({name, id, weight, height}: Props) => {
    return (
        <div className={style.PokemonContent}>
                <p>{name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                
                <p>Number: {id}</p>
                <p>Weight: {weight} kg</p>
                <p>Height: {height} cm</p>
        </div>
    )
}
