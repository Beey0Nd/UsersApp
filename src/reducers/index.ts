import { ActionTypes } from "../types/actions";
import { IState } from "../types/state";

const initialState: IState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activeFilter: "all"
}

const reducer = (state: IState = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case "HEROES_DELETE": 
            return {
                ...state,
                heroes: state.heroes.filter((hero) => hero.id !== action.payload)
            }
        case "ADD_FILTERS": 
            return {
                ...state,
                filters: action.payload
            }
        case "SET_FILTER": {
            return {
                ...state,
                activeFilter: action.payload
            }
        }
        case "CREATE_HERO": {
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        }
        default: return state
    }
}

export default reducer;