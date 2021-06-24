import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../store/action/user";
import { useHistory, useLocation } from "react-router-dom";

import { Link } from 'react-router-dom';

const Navbar = () => {
    const [pageURL, setPageURL] = useState("");
    const authUser = !!localStorage.getItem("apitoken");
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        setPageURL(location.pathname);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        history.push("/user/login");
    };
    return (
        <>
            <div className="container-fluid navbar-container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand title link" to="/">Password Manager</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                {authUser && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                                        </li>
                                    </>
                                )}
                                {!authUser && (
                                    <>
                                        {pageURL === "/user/register" || (
                                            <li className="nav-item">
                                                <a className="nav-link" href="/user/register">Register</a>
                                            </li>
                                        )}
                                        {pageURL === "/user/login" || (
                                            <li className="nav-item">
                                                <a className="nav-link" href="/user/login">Login</a>
                                            </li>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav> 
            </div>
        </>
    )
}

export default Navbar
