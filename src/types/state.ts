export type Heroes = Array<Hero>
export type Filters = Array<Filter>
export type HeroId = string
export type Filter = "all" | "fire" | "water" | "wind" | "earth" 
export type LoadingStatus = "idle" | "loading" | "error"

export type Hero = {
    name: string,
    description: string,
    element: string,
    id: HeroId
}

export interface IState {
    heroes: Heroes,
    heroesLoadingStatus: LoadingStatus,
    filters: Filters,
    activeFilter: Filter
} 