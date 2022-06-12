import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import { heroesFetching, heroesFetched, heroesFetchingError } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import { Heroes, IState } from '../../types/state';

const HeroesList = () => {
    const {heroes, heroesLoadingStatus, activeFilter} = useSelector((state: IState) => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(heroesFetching());
        request({url: "http://localhost:3001/heroes"})
            .then((data: Heroes) => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError))

        // eslint-disable-next-line
    }, []);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (heroes: Heroes) => {
        if (heroes.length === 0) {
            return (
                <CSSTransition
                    component={null}
                    timeout={500}
                    classNames="item"
                >
                    <h5 className="text-center mt-5">Героев пока нет</h5>
                </CSSTransition>
            )
            
        }

        return heroes.map(({id, element, ...props}) => {
            if (activeFilter === "all" || activeFilter === element) {
                return (
                    <CSSTransition
                        component={null}
                        key={id}
                        timeout={150}
                        classNames="item"
                    >
                        <HeroesListItem element={element} id={id} {...props}/>
                    </CSSTransition>
                )
                
            }
            return null;
        })  
    }

    const elements = renderHeroesList(heroes);
    return (
        <ul>
            <TransitionGroup className="todo-list">
                {elements}
            </TransitionGroup>
        </ul>
    )
}

export default HeroesList;