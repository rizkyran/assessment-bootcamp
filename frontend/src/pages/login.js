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
                                        <label for="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                        <p className="subtitle small text-end form-helper-text">Lupa Password</p>
                                    </div>
                                    <button type="submit" className="primary long">Masuk</button>
                                </form>
                                <p className="small text-center">
                                    Belum punya akun?&nbsp;
                                    <b className="form-helper-text">
                                        Daftar
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
