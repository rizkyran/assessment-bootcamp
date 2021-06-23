import React from 'react'

import Navbar from '../components/navbar'

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
                        <button className="primary">
                            Start Managing
                        </button>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </>
    )
}

export default Landing
