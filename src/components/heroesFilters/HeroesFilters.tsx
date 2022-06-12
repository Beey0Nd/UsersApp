import Spinner from "../spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addFilters, heroesFetchingError, setActiveFilter } from "../../actions";
import { useHttp } from "../../hooks/http.hook";
import { Filter, Filters, IState } from "../../types/state";

type BtnClasses = "btn-outline-dark" | "btn-danger" | "btn-primary" | "btn-success" | "btn-secondary"

const classes: Array<BtnClasses> = [
    "btn-outline-dark",
    "btn-danger",
    "btn-primary",
    "btn-success",
    "btn-secondary"
]

const HeroesFilter: React.FC = () => {
    const dispatch = useDispatch();
    const { filters, heroesLoadingStatus, activeFilter } = useSelector((state: IState) => state);
    const { request } = useHttp();


    useEffect(() => {
        request({url: "http://localhost:3001/filters"})
            .then((data: Filters) => dispatch(addFilters(data)))
            .catch(() => dispatch(heroesFetchingError()))
    }, [request, dispatch]);

    const isActive = (filter: Filter) => activeFilter === filter ? "active" : ""
    
    const renderFilterButtons = (filters: Filters) => filters.map(
        (filter, id) => (
            <button 
                key={`filter button ${id}`}
                onClick={() => dispatch(setActiveFilter(filter))} 
                className={`btn ${classes[id]} ${isActive(filter)}`}>{filter}
            </button>
        )
    )
    

    const filterButtons = renderFilterButtons(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {heroesLoadingStatus === "loading" ?
                    <Spinner/> : filterButtons}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilter;