import React from 'react'

import Navbar from "../component/navbar"
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { useHistory, useLocation } from "react-router-dom"
import {fetchPass, updatePass} from "../store/action/passAction"

function UpdatePass() {
    const history = useHistory()
    const dispatch = useDispatch()

    const [website, setWebsite] = useState("")
    const [pass, setPass] = useState("")

    const { error } = useSelector(state => state.user)

    const location = useLocation()

    const passId = location.pathname.substr(location.pathname.lastIndexOf("/")+1)

    // useEffect(() => {
    //     console.log(passId)
    // }, [])


    const submitUpdatePass = (e) => {
        e.preventDefault()
        const data = {
            webite : website,
            site_pass : pass,
        }

        console.log(data)

        dispatch(updatePass(passId,data))

        if (!error) {
            dispatch(updatePass(passId,data))
            dispatch(fetchPass())
            history.push("/site")
            window.location.reload()
        }

    }
    const back = () => {
        dispatch(fetchPass())
        history.push("/site")
        window.location.reload()
    }


    return (
        <>
            <Navbar />
            <div className="container-fluid fluid-page auth-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5 form-container">
                            <h1 className="title text-center">
                                Change Data Site
                            </h1>
                            <br />
                            <div className="row">
                                <form onSubmit={submitUpdatePass}>
                                    <div className="mb-3">
                                        <label for="website" className="form-label">Website</label>
                                        <input type="text" className="form-control" id="website" onChange={e => {
                                            e.preventDefault()
                                            setWebsite(e.target.value)
                                        }} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="text" className="form-control" id="password" onChange={e => {
                                            e.preventDefault()
                                            setPass(e.target.value)
                                        }} />
                                    </div>
                                    <button type="submit" className="primary long mb-2">Add</button>
                                    <button type="submit" className="b-danger long" onClick={back}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default UpdatePass