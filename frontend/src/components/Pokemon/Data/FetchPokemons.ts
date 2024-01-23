import { Pokemon_Detail, Pokemons_List } from "../Domaine/Constant";
import { PokemonInfoProps } from "../Domaine/PokemonProps";

export const fetchPokemons = async(page?: number): Promise<PokemonInfoProps[]> => {
    try {
        const response = await fetch(`${Pokemons_List}?page=${page}`);
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
export const fetchPokemonDetails = async (id: number): Promise<PokemonInfoProps> => {
    try {
        const response = await fetch(`${Pokemon_Detail}/${id}`);
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

