import React, { useContext } from 'react'
import PetItem from './PetItem';
import "./PetsList.css";
import authCtx from '../store/auth-context';

const PetsList = () => {
    const {state} = useContext(authCtx);
    console.log("PetsList");
    return (
        <div>
            {state.map((pet) => {
                return <PetItem key={pet.id} {...pet}/>
            })}
        </div>
    );
};

export default PetsList;
