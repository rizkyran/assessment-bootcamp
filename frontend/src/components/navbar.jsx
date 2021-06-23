import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid navbar-container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand title" href="#">Password Manager</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Register</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> 
            </div>
        </>
    )
}

export default Navbar
