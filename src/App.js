import React, { useCallback, useState } from 'react'
import { useContext } from 'react';
import Login from './components/Login/Login';
import NavBar from './components/navigation/NavBar';
import NewPet from './components/Pet/NewPet';
import PetsList from './components/Pet/PetsList';
import authCtx from './components/store/auth-context';
import "./index.css";

const App = () => {
    const ctx = useContext(authCtx);
    const [emailNavBar, setEmailNavBar] = useState("");
    const emailN = useCallback((emailV) => {
        setEmailNavBar(emailV);
    },[]);
    console.log("App");
    return (
        <div className="content">
            <NavBar email={emailNavBar}/>
            {ctx.isLoggedIn ? (
                <>
                    <NewPet />
                    <PetsList /> 
                </>
            ): (
                <Login emailL={emailN}/>
            )}
        </div>
    );
};

export default App;
