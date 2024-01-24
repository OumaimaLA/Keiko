export interface PokemonCaracteristique {
    id: number;
    name: string;
    height: number;
    weight: number;
}

export interface PokemonImageCaraceteristique {
    type: string;
    id: number
    name: string
    isShiny?: boolean
}
