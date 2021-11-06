import React, { useState } from 'react'
import { useContext } from 'react';
import Login from './components/Login/Login';
import NavBar from './components/navigation/NavBar';
import NewPet from './components/Pet/NewPet';
import PetsList from './components/Pet/PetsList';
import authCtx from './components/store/auth-context';
import "./index.css";

export const App = () => {
    const ctx = useContext(authCtx);
    const [petsList, setPetsList] = useState([]);
    const newPetHandler = (petName, ownerName, ownerEmail) => {
        setPetsList((prevPetsList) => {
            return [...prevPetsList, 
                {id: Math.trunc(Math.random() * 100), petName, ownerName, ownerEmail}
            ];
        });
    };

    return (
        <div className="content">
            <NavBar />
            {ctx.isLoggedIn ? (
                <>
                    <NewPet onNewPet={newPetHandler}/>
                    <PetsList pets={petsList}/> 
                </>
            ): (
                <Login />
            )}
        </div>
    );
};
