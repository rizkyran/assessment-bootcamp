import React, { useEffect, useState } from "react"

import Navbar from "../component/navbar"
import { useDispatch, useSelector } from "react-redux"

import { login } from '../store/action/userAction'
import { useHistory, Link } from "react-router-dom"
import { fetchPass } from "../store/action/passAction"

function LoginPage() {

    const history = useHistory()

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const { user, error } = useSelector(state => state.user)

    useEffect(() => {
    }, [])

    const loginSubmit = () => {
        const data = {
            email : email,
            password :pass,
        }
        dispatch(login(data, history))

        if (!error) {
            dispatch(fetchPass(data))
            history.push("/site")
        }
        console.log(data)
    }

    return(
        <>
            <Navbar />
            <div className="container-fluid fluid-page auth-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5 form-container">
                            <h1 className="title text-center">
                                Login Using Your Account
                            </h1>
                            <br />
                            <div className="row">
                                <form onSubmit={ loginSubmit }>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={e => {
                                            e.preventDefault()
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" onChange={e => {
                                            e.preventDefault()
                                            setPass(e.target.value)
                                        }} />
                                    </div>
                                        <button type="submit" className="primary long">Sign In</button>
                                </form>
                                <p className="small text-center">
                                    Don't have any account?&nbsp;
                                    <b className="form-helper-text">
                                        <Link className="link" to="/register">
                                            Sign Up
                                        </Link>
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


export default LoginPage