import React, { useState } from 'react'

import Navbar from '../components/navbar'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { register } from "../store/action/user"

const Register = () => {
    const history = useHistory()

    const dispatch = useDispatch()


    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const { ex } = useSelector(state => state.user)
    
    const register = (e) => {
        e.preventDefault()
        const data = {
            f_name: name,
            address: address,
            email: email,
            password: pass,
        }

        console.log(data)


        if (!ex) {
            dispatch(register(data))
            history.push("/login")
        }
        dispatch(register(data))
    }
    return (
        <>
            <Navbar />
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
                                        <input type="text" className="form-control" id="name" onChange={e => {
                                            e.preventDefault()
                                            setName(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" onChange={e => {
                                            e.preventDefault()
                                            setAddress(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={e => {
                                            e.preventDefault()
                                            setEmail(e.target.value)
                                        }} />
                                    </div>
                                    <div className="mb-3">
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
