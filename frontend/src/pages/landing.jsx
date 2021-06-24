import React from 'react'
// import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom';

import Navbar from '../component/navbar'



const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid fluid-page landing-container">
                <div className="container">
                    <div className="col-sm-7">
                        <h1 className="display-3">
                            WELCOME TO PASSWORD MANAGER!
                        </h1>
                        <br />
                        <a href="/login">
                            <Link className="link" to="/login">
                                <button className="primary">
                                    Start Managing
                                </button>
                            </Link>
                        </a>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </>
    )
}

export default Landing
