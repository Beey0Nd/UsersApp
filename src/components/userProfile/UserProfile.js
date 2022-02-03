import "./UserProfile.scss";
import { Formik } from "formik";
import { useEffect, useState } from "react";

const UserProfile = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const { id } = props.location.state;
        handleMore(id);
    }, [])
    const handleMore = (id) => {
        const user = props.users.find(item => item.id === id)
        setCurrentUser(user)
    }

    return (
        <section className="user">
            {currentUser ? 
            <>
                <header className="user__header">
                    <h2 className="user__heading">Список пользователей</h2>
                    <button className="user__edit">Редактировать</button>
                </header>
                <Formik initialValues={{
                    name: "",
                    username: "",
                    email: "",
                    street: "",
                    city: "",
                    zipcode: "",
                    phone: "",
                    website: "",  
                }}>
                </Formik>
            </> : <div>LOADING</div>}
        </section>
    )
}

export default UserProfile;