import React from "react";  //, { useEffect }
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <img 
            alt="logo"
            className="logo"
             src='https://thumbs.dreamstime.com/b/hipster-king-icon-crown-hand-sketch-vector-illustration-design-hipster-king-icon-crown-hand-sketch-beard-mustache-109186364.jpg'></img>
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>

            }
        </div>
    )
}

export default Nav;