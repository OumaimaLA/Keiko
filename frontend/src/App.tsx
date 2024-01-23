import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"
import { PokemonDetail } from "./pages/Pokemon/PokemonDetail"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex/:page" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
