import { POKEMON_DETAIL, POKEMONS_LIST } from "../Domaine/Constant";
import { PokemonCaracteristique } from "../Domaine/PokemonProps";

export const fetchPokemons = async(page?: number): Promise<PokemonCaracteristique[]> => {
    try {
        const response = await fetch(`${POKEMONS_LIST}?page=${page}`);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données.');
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
    console.error('Erreur:', error);
    throw new Error('Erreur lors de la récupération des données.');
    }
}
export const fetchPokemonDetails = async (id: number): Promise<PokemonCaracteristique> => {
    try {
        const response = await fetch(`${POKEMON_DETAIL}/${id}`);
        if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        throw new Error('Erreur lors de la récupération des données.');
    }
};

