import React from 'react'
import "./Button.css";

const Button = (props) => {
    return (
        <button className="custom" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default React.memo(Button);
