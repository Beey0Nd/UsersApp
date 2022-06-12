import { ActionTypes } from "../types/actions";
import { Filter, Filters, Hero, Heroes, HeroId } from "../types/state";

export const heroesFetching = ():ActionTypes => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes: Heroes):ActionTypes => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = ():ActionTypes => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteHero = (id: HeroId):ActionTypes => {
    return {
        type: 'HEROES_DELETE',
        payload: id
    }
}

export const addFilters = (filters: Filters):ActionTypes => {
    return {
        type: "ADD_FILTERS",
        payload: filters
    }
}

export const setActiveFilter = (filter: Filter):ActionTypes => {
    return {
        type: "SET_FILTER",
        payload: filter
    }
}

export const createHero = (hero: Hero):ActionTypes => {
    return {
        type: "CREATE_HERO",
        payload: hero
    }
}


// export const createAction = (action, data) => {
//     return data ? {type: action, payload: data} : {type: action}
// }