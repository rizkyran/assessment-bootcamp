import React from 'react'

const Register = () => {
    return (
        <>
            <div className="container-fluid fluid-page auth-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5 form-container">
                            <h1 className="title text-center">
                                Create A New Account
                            </h1>
                            <br />
                            <div className="row">
                                <form>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="address" className="form-label">Address</label>
                                        <input type="long" className="form-control" id="address" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="primary long">Sign Up</button>
                                </form>
                                <p className="small text-center">
                                    Already have an account?&nbsp;
                                    <b className="form-helper-text">
                                        <a href="">
                                            Sign In
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

export default Register
