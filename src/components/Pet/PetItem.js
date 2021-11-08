import React, { useContext} from 'react'
import authCtx from '../store/auth-context';

const PetItem = ({ petName, ownerName, ownerEmail, id }) => {
    const {dispatch} = useContext(authCtx);
    const handlerClick = (id) => {
        console.log(id);
        dispatch({type: "REMOVE_PET", payload: id});
    }
    return (
        <div className="blog-preview" onClick={() => {
            handlerClick(id);
        }}>
            <h2>{petName}</h2>
            <p>{ownerName}</p>
            <p>{ownerEmail}</p>
        </div>
    );
};

export default PetItem;
