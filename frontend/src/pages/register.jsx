import React, { useState } from "react"

import Navbar from "../component/navbar"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from "react-router-dom"
import { register } from '../store/action/userAction'

function RegisterPage() {
    const history = useHistory()

    const dispatch = useDispatch()
    

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const { error } = useSelector(state => state.user)

    const registerSubmit = (e) => {
        e.preventDefault()
        const data = {
            f_name : name,
            address : address,
            email : email,
            password :pass,
        }

        console.log(data)

        
        if (!error) {
            dispatch(register(data))
            history.push("/login")
        }
        dispatch(register(data))
        window.location.reload()
    }

    return(
        <>
        <Navbar/>
            <div className="container-fluid fluid-page auth-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5 form-container">
                            <h1 className="title text-center">
                                Create A New Account
                            </h1>
                            <br />
                            <div className="row">
                                <form onSubmit={registerSubmit}>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" onChange={e => {
                                            e.preventDefault()
                                            setName(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="adress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" onChange={e => {
                                            e.preventDefault()
                                            setAddress(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
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
                                    <button type="submit" className="primary long">Sign Up</button>
                                </form>
                                <p className="small text-center">
                                    Already have an account?&nbsp;
                                    <b className="form-helper-text">
                                        <Link className="link" to="/login">
                                            Sign In
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


export default RegisterPage