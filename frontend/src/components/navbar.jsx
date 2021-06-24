import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../store/action/user";
import { useHistory, useLocation } from "react-router-dom";

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
        history.push("/login");
    };
    return (
        <>
            <div className="container-fluid navbar-container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand title link" href="/">Password Manager</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                {authUser && (
                                    <>
                                        <a className="nav-link" onClick={handleLogout}>Logout</a>
                                    </>
                                )}
                                {!authUser && (
                                    <>
                                        {pageURL === "/register" || (
                                            <a className="nav-link" href="/register">Register</a>
                                        )}
                                        {pageURL === "/login" || (
                                            <a className="nav-link" href="/login">Login</a>
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
