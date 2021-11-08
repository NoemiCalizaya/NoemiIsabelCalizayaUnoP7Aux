import React, { useContext, useState } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import authCtx from '../store/auth-context';

const NewPet = (props) => {
    const {dispatch} = useContext(authCtx);
    console.log("NewPet");
    const [petName, setPetName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    const [showSumary, setShowSumary] = useState(false);

    const petNameHandler = (event) => {
        console.log(event.target);
        setPetName(event.target.value);
        if (petName !== "") 
            setShowSumary(true);
        else 
            setShowSumary(false);
    };
    const ownerNameHandler = (event) => {
        setOwnerName(event.target.value);
        if (ownerName !== "") 
            setShowSumary(true);
        else 
            setShowSumary(false);
    };
    const ownerEmailHandler = (event) => {
        setOwnerEmail(event.target.value);
        if (ownerEmail !== "") 
            setShowSumary(true);
        else 
            setShowSumary(false);
    };
    const pet = {
        petName,
        ownerName,
        ownerEmail
    };
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_PET",
            payload: {...pet, id: Math.trunc(Math.random() * 100)}
        });
        setPetName("");
        setOwnerName("");
        setOwnerEmail("");
    }

    return (
        <>
            <Card>
                <form onSubmit={submitHandler}>
                    <label>Pet Name</label>
                    <input type="text" onChange={petNameHandler} value={petName}/>
                    <label>Owner Name</label>
                    <input type="text" onChange={ownerNameHandler} value={ownerName}/>
                    <label>Owner Email</label>
                    <input type="email" onChange={ownerEmailHandler} value={ownerEmail}/>
                    <Button type="submit">Crear</Button>
                </form>
            </Card>
            {showSumary? (
                <p>
                    Soy {ownerName} ({ownerEmail}) y mi mascota es {petName}
                </p>
            ) : (
                <></>
            )}
        </>
    );
};

export default NewPet;
