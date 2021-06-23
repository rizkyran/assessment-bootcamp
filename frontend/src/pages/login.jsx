import React from 'react'

const Login = () => {
    return (
        <>
            <div className="container-fluid fluid-page auth-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5 form-container">
                            <h1 className="title text-center">
                                Login Using Your Account
                            </h1>
                            <br />
                            <div className="row">
                                <form>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="primary long">Sign In</button>
                                </form>
                                <p className="small text-center">
                                    Don't have any account?&nbsp;
                                    <b className="form-helper-text">
                                        <a href="">
                                            Sign Up
                                        </a>
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
