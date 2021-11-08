import React, { useContext, useReducer, useState } from 'react'
import Card from "../UI/Card";
import Button from '../UI/Button';
import AuthContext from '../store/auth-context';



const emailReducer = (state, action) => {
    if (action.type === "USER INPUT") {
        return {
            value: action.val,
            isValid: action.val.includes("@")
        };
    }
    return {
        value: "",
        isValid: false
    };
};

const Login = (props) => {
    const ctx = useContext(AuthContext);

    /* const [email, setEmail] = useState(""); */
    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null
    });
    const [password, setPassword] = useState("");

    const emailChangeHandler = (e) => {
        /* console.log(e.target.value);
        setEmail(e.target.value); */
        dispatchEmail({
            val: e.target.value,
            type: "USER INPUT"
        });
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email.isValid) {
            ctx.onLogin(email, password);
        }
        else {
            console.log("el email es invalido");
        }
        email.value = "";
        setPassword("");
    };
    const emailV = email.value;
    props.emailL(emailV);
    return (
        <>
            <Card>
                <form onSubmit={handlerSubmit}>
                    <label>Email</label>
                    <input type="text" onChange={emailChangeHandler}/>
                    <label>Password</label>
                    <input type="password" onChange={passwordChangeHandler}/>
                    <Button>login</Button>
                </form>
            </Card>
        </>
    );
};

export default Login;
