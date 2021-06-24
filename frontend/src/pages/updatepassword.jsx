import React from 'react'

import Navbar from "../component/navbar"
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { useHistory, useLocation } from "react-router-dom"
import { getPass, alterPass } from "../store/action/site"

function AlterSite() {
    const history = useHistory()
    const dispatch = useDispatch()

    const [webite, setWebsite] = useState("")
    const [password, setPass] = useState("")

    const { error } = useSelector(state => state.user)

    const location = useLocation()

    const siteID = location.pathname.substr(location.pathname.lastIndexOf("/") + 1)

        const submitalterPass = (e) => {
        e.preventDefault()
        const data = {
            Website: webite,
            Password: password,
        }

        console.log(data)

        dispatch(alterPass(siteID, data))

        if (!error) {
            dispatch(alterPass(siteID, data))
            dispatch(getPass())
            history.push("/pass")
        }

    }
    const back = () => {
        dispatch(getPass())
        history.push("/user/site")
    }


    return (
        <div className="container-fluid fluid-page">
            <Navbar />
            <div className="container">
                <form style={{ textAlign: "center", paddingTop: "150px", paddingBottom: "150px" }} onSubmit={submitalterPass}>
                    <h2>Create New Password</h2>
                    <div className="mb-3">
                        <label for="website" className="form-label">Website</label>
                        <input type="text" className="form-control" id="website" onChange={e => {
                            e.preventDefault()
                            setWebsite(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" onChange={e => {
                            e.preventDefault()
                            setPass(e.target.value)
                        }} />
                    </div>
                    <button type="submit" className="btn btn-danger" style={{ margin: "0px 100px" }} onClick={back}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{ margin: "0px 100px" }}>Update</button>
                </form>
            </div>
        </div>
    )
}


export default AlterSite