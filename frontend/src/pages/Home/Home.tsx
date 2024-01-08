import styles from "./Home.module.css"

export const Home = () => {
  const pokemon: string ="";
  const name: string='Carapuce';
  const Number: number=7;
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div>Commence par créer ton premier pokemon: {pokemon}</div>
      <div>
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"/>
        <p>Name: {name}</p>
        <p>Number: {Number} </p>
      </div>
    </div>
  )
}
