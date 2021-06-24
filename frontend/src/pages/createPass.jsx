import React from 'react'

import Navbar from "../component/navbar"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { useHistory } from "react-router-dom"
import {createPass, fetchPass} from "../store/action/passAction"

function CreatePass() {
    const history = useHistory()
    const dispatch = useDispatch()

    const [website, setWebsite] = useState("")
    const [pass, setPass] = useState("")

    const { error } = useSelector(state => state.user)

    const submitCreatePass = (e) => {
        e.preventDefault()
        const data = {
            webite: website,
            site_pass : pass,
        }

        console.log(data)

        
        if (!error) {
            dispatch(createPass(data))
            dispatch(fetchPass)
            history.push("/site")
            window.location.reload()
        }

    }
    // const back = () => {
    //     history.push("/pass")
    // }



    return (
        <>
            <Navbar/>
            <div className="container-fluid fluid-page auth-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-5 form-container">
                            <h1 className="title text-center">
                                Add New Site Data
                            </h1>
                            <br />
                            <div className="row">
                                <form onSubmit={submitCreatePass}>
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
                                    <button type="submit" className="primary long">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CreatePass