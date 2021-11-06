import React from 'react'
import "./PetsList.css";

const PetsList = ({ pets }) => {
    return (
        <div>
            {pets.map((pet) => {
                return (
                    <div className="blog-preview" key={pet.id}>
                        <h2>{pet.petName}</h2>
                        <p>{pet.ownerName}</p>
                        <p>{pet.ownerEmail}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default PetsList;
