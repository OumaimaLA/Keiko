import { Pokedex } from "components/Pokemon/Pokedex/Pokedex";
import { useParams } from "react-router-dom";
import styles from "pages/Home/Home.module.css"
import { NavigateButton } from "components/Navigate/Navigate";

export const Home = () => {
  const { page } = useParams()

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <NavigateButton page={page}/>
      <Pokedex page={page}/>
    </div>
  )
}
