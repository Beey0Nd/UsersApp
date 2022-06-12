import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createHero } from "../../actions";
import { useHttp } from "../../hooks/http.hook";
import { v4 } from "uuid";
import { Filters, IState } from "../../types/state";

const HeroesAddForm: React.FC = () => {
    const {heroesLoadingStatus} = useSelector((state: IState) => state)
    const [hero, setHero] = useState({
        name: "",
        description: "",
        element: "",
        id: "",
    });
    const dispatch = useDispatch();
    const elements = useSelector((state: IState) => state.filters.filter(item => item !== "all"))
    const {request} = useHttp();

    const renderOptions = (elements: Filters) => {
        return elements.map((item, id) => (
            <option
                key={`option ${id}`} 
                value={item}>{item}
            </option>
            )
        )
    }
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(hero.element === "Элемент героя..." || hero.element === "") return;
        const heroId = v4();
        request({
            url: "http://localhost:3001/heroes",
            method: "POST",
            body: JSON.stringify({...hero, id: heroId})
        })
        .then(() => dispatch(createHero({...hero, id: heroId})))
        .catch(err => console.log(err));
        setHero({
            name: "",
            description: "",
            element: "",
            id: ""
        })
    }
    return (
        <form 
        onSubmit={handleSubmit}
        className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    onChange={(e) => setHero({...hero, name: e.target.value})}
                    value={hero.name}
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как зовут героя?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={(e) => setHero({...hero, description: e.target.value})}
                    value={hero.description}
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что герой умеет?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                {heroesLoadingStatus !== "loading" ?
                <>
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <select 
                        onChange={(e) => setHero({...hero, element: e.target.value})}
                        required
                        className="form-select" 
                        id="element" 
                        name="element">
                        <option >Элемент героя...</option>
                        {renderOptions(elements)}
                    </select>
                </>  : null}
            </div>

            <button
            type="submit" 
            className="btn btn-primary">Создать</button>
        </form>
    )
}
export default HeroesAddForm;