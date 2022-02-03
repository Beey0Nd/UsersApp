import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useRequest from "../../services/useRequest";
import Filter from "../filter/Filter";
import UsersList from "../usersList/UsersList";
import UserProfile from "../userProfile/UserProfile";

import "./App.scss";

const App = () => {
    const [users, setUsers] = useState([]);
    const {request, loading, setLoading} = useRequest();
    
    useEffect(() => {
        request()
        .then(res => setUsers(res))
        .then(() => setLoading(false));
    }, [])
    return (
        <Router>
            <div className="app">
                <Filter users={users} setUsers={setUsers}/>  
                <Routes>
                    <Route path="/" element={
                        <UsersList 
                            users={users} 
                            loading={loading}
                        />  
                    }/>
                    <Route path="/user/:name" element={
                        <UserProfile users={users}/>
                    }/>
                </Routes>
            </div>
        </Router>
    )

}

export default App;
