import React, { useCallback, useContext, useReducer } from 'react'
import Card from "../UI/Card";
import Button from '../UI/Button';
import AuthContext from '../store/auth-context';



const emailReducer = (state, action) => {
    if (action.type === "USER INPUT") {
        return {
            value: action.val
        };
    }
    if (action.type === "ONBLUR_EMAIL") {
        if (/^[a-zA-Z0-9_.+-]+@(gmail|hotmail|yahoo)+\.com$/.test(action.vale)) {
            return {
                isValid: "Correcto"
            };
        }
        else {
            return {
                isValid: "Incorrecto"
            };
        };
    }
};

const passwordReducer = (state, action) => {
    if (action.type === "PASSWORD") {
        return {
            value: action.valp
        };
    }
    return {
        value: ""
    };
};

const Login = (props) => {
    const ctx = useContext(AuthContext);

    /* const [email, setEmail] = useState(""); */
    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: ""
    });
    /* const [password, setPassword] = useState(""); */
    const [password, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: ""
    });

    const emailChangeHandler = useCallback((e) => {
        /* console.log(e.target.value);
        setEmail(e.target.value); */
        dispatchEmail({
            val: e.target.value,
            type: "USER INPUT"
        });
    }, []);

    const onblurEmail = (e) => {
        dispatchEmail({
            vale: e.target.value,
            type: "ONBLUR_EMAIL"
        });
    };

    const passwordChangeHandler = useCallback((e) => {
        /* setPassword(e.target.value); */
        dispatchPassword({
            valp: e.target.value,
            type: "PASSWORD"
        });
    }, []);

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email.isValid === "Correcto") {
            ctx.onLogin(email.value, password.value);
            const emailV = email.value;
            props.emailL(emailV);
        }
        else 
            console.log("credenciales incorrectas");
        email.value = "";
        password.value= "";
    };
    return (
        <>
            <Card>
                <form onSubmit={handlerSubmit}>
                    <label>Email</label>
                    <input type="text" onChange={emailChangeHandler} onBlur={onblurEmail}/>
                    {email.isValid}
                    <label>Password</label>
                    <input type="password" onChange={passwordChangeHandler}/>
                    <Button>login</Button>
                </form>
            </Card>
        </>
    );
};

export default Login;
