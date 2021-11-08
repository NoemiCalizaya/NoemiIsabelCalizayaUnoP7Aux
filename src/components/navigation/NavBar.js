import React, { useContext } from 'react'
import "./NavBar.css";
import Button from "../UI/Button";
import AuthContext from '../store/auth-context';

const NavBar = (props) => {
    const ctx = useContext(AuthContext);
    console.log("Nav");
    return (
        <nav className="navbar">
            <h1>Pets Store</h1>
            <section className="links">
                {/* <a href="#">Home</a>
                <a href="#">About</a> */}
                <Button onClick={ctx.onLogout}>Logout</Button>
                {ctx.isLoggedIn ? (
                    <div className= "email"><b>Email del Login: </b>{props.email}</div>
                ): (
                    <div className= "email"><b>Email del Login: </b></div>
                )}
            </section>
        </nav>
    );
};

export default React.memo(NavBar);
