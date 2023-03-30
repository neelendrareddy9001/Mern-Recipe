import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import {useCoolies} from 'react-cookie';

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    const logOut = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userId");
        navigate("/auth");
    }
    
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create-recipe">Create Recipe</Link>
            <Link to="/saved-recipes">Saved Recipes</Link>
            {!cookies.access_token ? (
                <Link to="/auth">Login/Register</Link>
            ) : (
                <button onClick={logOut}>LogOut</button>
            )}
           
        </div>
    )
}
