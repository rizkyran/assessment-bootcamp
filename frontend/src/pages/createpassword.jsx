import React from 'react'

import Navbar from "../component/navbar"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { useHistory } from "react-router-dom"
import { addSite, getPass } from "../store/action/pass"

function CreatePassword() {
    const history = useHistory()
    const dispatch = useDispatch()

    const [webite, setWebite] = useState("")
    const [password, setPass] = useState("")

    const { error } = useSelector(state => state.user)

    const submitaddSite = (e) => {
        e.preventDefault()
        const data = {
            Webste: webite,
            Password: password,
        }

        console.log(data)


        if (!error) {
            dispatch(addSite(data))
            dispatch(getPass)
            history.push("/user/site")
        }

    }
    // const back = () => {
    //     history.push("/pass")
    // }



    return (
        <>
            <Navbar />
            <div className="container">
                <form style={{ textAlign: "center", paddingTop: "150px", paddingBottom: "150px" }} onSubmit={submitaddSite}>
                    <h2>Create New Password</h2>
                    <div className="mb-3">
                        <label for="website" className="form-label">Website</label>
                        <input type="text" className="form-control" id="website" onChange={e => {
                            e.preventDefault()
                            setWebite(e.target.value)
                        }} />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" onChange={e => {
                            e.preventDefault()
                            setPass(e.target.value)
                        }} />
                    </div>
                    <button type="submit" className="primary">Create</button>
                </form>
            </div>
        </>
    )
}


export default CreatePassword