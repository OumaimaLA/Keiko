export interface PokemonInfoProps {
    id: number;
    name: string;
    height: number;
    weight: number;
}

export interface PokemonImageProps {
    type: string;
    id: number
    name: string
    isShiny?: boolean
}
