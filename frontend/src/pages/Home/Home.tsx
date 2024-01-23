import { PokedexPage } from "components/Pokemon/Pokedex/PokedexPage";
import { useParams } from "react-router-dom";
import styles from "pages/Home/Home.module.css"
import { NavigateButton } from "components/Navigate/Navigate";

export const Home = () => {
  const { page } = useParams()

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <NavigateButton page={page}/>
      <PokedexPage page={page}/>
    </div>
  )
}
