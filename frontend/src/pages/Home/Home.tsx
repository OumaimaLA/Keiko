import { PokemonApi } from "components/Pokemon/PokemonApi";
import { useParams } from "react-router-dom";
import styles from "pages/Home/Home.module.css"

export const Home = () => {
  const { page } = useParams()

    const handlePageChange = (newPage: number) => {
        window.location.href = `/pokedex/${newPage}`;
    };
  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <div className={styles.ButtonsContainer}>
          <div className={styles.leftButtonContainer}>
                <button onClick={() => handlePageChange(Number(page) - 1)}>&lt;</button>
            </div>
            <div className={styles.rightButtonContainer}>
                <button onClick={() => handlePageChange(Number(page) + 1)}>&gt;</button>
            </div>
      </div>
      <PokemonApi page={page}/>
    </div>
  )
}
