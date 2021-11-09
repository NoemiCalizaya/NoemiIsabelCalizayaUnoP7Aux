import React, { useCallback, useContext, useReducer } from 'react'
import Card from "../UI/Card";
import Button from '../UI/Button';
import AuthContext from '../store/auth-context';



const emailReducer = (state, action) => {
    if (action.type === "EMAIL_INPUT") {
        return {
            value: action.vale
        };
    }
    if (action.type === "ONBLUR_EMAIL") {
        if (/^[a-zA-Z0-9_.+-]+@(gmail|hotmail|yahoo)+\.com$/.test(action.vale)) {
            return {
                value: action.vale,
                isValidEmail: "Correcto"
            };
        }
        else {
            return {
                isValidEmail: `El email debe contener el carácter @ 
                y solamente los dominios de gmail.com, hotmail.com y 
                yahoo.com`
            };
        };
    }
};

const passwordReducer = (state, action) => {
    if (action.type === "PASSWORD_INPUT") {
        return {
            value: action.valp
        };
    }
    if (action.type === "ONBLUR_PASSWORD") {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(action.valp)) {
            return {
                value: action.valp,
                isValidPassword: "Correcto"
            };
        }
        else {
            return {
                isValidPassword: `El password debe contener como mínimo 8 caracteres y como máximo 15.
                Debe contener al menos un número, una letra mayúscula y un caracter especial.
                No debe contener espacios`,
            };
        };
    }
};

const Login = (props) => {
    const ctx = useContext(AuthContext);

    /* const [email, setEmail] = useState(""); */
    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValidEmail: null
    });
    /* const [password, setPassword] = useState(""); */
    const [password, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValidPassword: null
    });

    const emailChangeHandler = useCallback((e) => {
        /* console.log(e.target.value);
        setEmail(e.target.value); */
        dispatchEmail({
            vale: e.target.value,
            type: "EMAIL_INPUT"
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
            type: "PASSWORD_INPUT"
        });
    }, []);

    const onblurPassword = (e) => {
        dispatchPassword({
            valp: e.target.value,
            type: "ONBLUR_PASSWORD"
        });
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (email.isValidEmail === "Correcto" && password.isValidPassword === "Correcto") {
            ctx.onLogin(email, password);
            const emailV = email.value;
            props.emailL(emailV);
        }
        else {
            console.log("email invalido o password invalido");
        }
        email.value = "";
        password.value= "";
    };

    return (
        <>
            <Card>
                <form onSubmit={handlerSubmit}>
                    <label>Email</label>
                    <input type="text" onChange={emailChangeHandler} onBlur={onblurEmail}/>
                    <div>{email.isValidEmail}</div>
                    <label>Password</label>
                    <input type="password" onChange={passwordChangeHandler} onBlur={onblurPassword}/>
                    <div>{password.isValidPassword}</div>
                    <Button>login</Button>
                </form>
            </Card>
        </>
    );
};

export default Login;
