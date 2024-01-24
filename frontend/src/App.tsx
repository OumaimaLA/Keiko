import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"
import { PokemonDetail } from "./pages/Pokemon/PokemonDetailPage"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
        <Route index element={<Navigate to="/pokedex/0" replace />} />
        <Route path="/pokedex/:page" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
