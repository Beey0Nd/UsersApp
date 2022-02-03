import { Link } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import "./UsersList.scss";

const UsersList = ({users, loading}) => {
    return (
        <section className="users">
            <h2 className="users__heading">Список пользователей</h2>
            <ul className="users__list">
                {loading ? <Spinner/> : 
                <View 
                users={users} />}
            </ul>
        </section>
    )
}

const View = ({users}) => {
    return (
        <>
            {users.map(item => {
                const {name, city, company, id} = item;   
                return (
                    <li key={id} className="users__card">
                        <div className="users__column">
                            <p className="users__info">
                                ФИО: <span>{name}</span>
                            </p>
                            <p className="users__info">
                                город: <span>{city}</span>
                            </p>
                            <p className="users__info">
                                компания: <span>{company}</span>
                            </p>
                        </div>
                        <Link 
                        className="users__more" 
                        to={{
                            pathname: `/user/${name.replace(/\s/g, '')}`,
                            state: {
                                id: id
                            }
                        }}
                        >Подробнее</Link>    
                    </li>
                )
            })}
            <li>
                <p className="users__found">Найдено {users.length} пользователей</p>
            </li>
        </>
    )
}

export default UsersList;