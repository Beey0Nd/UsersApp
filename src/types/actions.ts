import { Filter, Filters, Hero, Heroes, HeroId } from "./state"

// export const HEROES_FETCHING = "HEROES_FETCHING"
// export const HEROES_FETCHED = "HEROES_FETCHED"
// export const HEROES_FETCHING_ERROR = "HEROES_FETCHING_ERROR"
// export const HEROES_DELETE = "HEROES_DELETE"
// export const ADD_FILTERS = "ADD_FILTERS"
// export const SET_FILTER = "SET_FILTER"
// export const CREATE_HERO = "CREATE_HERO"

interface HeroesFetchingAction{
    type: "HEROES_FETCHING", 
}

interface HeroesFetchedAction{
    type: "HEROES_FETCHED", 
    payload: Heroes
}

interface HeroesFetchingErrorAction{
    type: "HEROES_FETCHING_ERROR", 
}

interface HeroesDeleteAction{
    type: "HEROES_DELETE", 
    payload: HeroId
}

interface AddFiltersAction{
    type: "ADD_FILTERS", 
    payload: Filters
}

interface SetFilterAction{
    type: "SET_FILTER", 
    payload: Filter
}

interface CreateHeroAction{
    type: "CREATE_HERO", 
    payload: Hero
}

export type ActionTypes = 
| HeroesFetchingAction 
| HeroesFetchedAction 
| HeroesFetchingErrorAction 
| HeroesDeleteAction 
| AddFiltersAction 
| SetFilterAction 
| CreateHeroAction