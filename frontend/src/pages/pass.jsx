import { deletePass, fetchPass } from "../store/action/passAction"
import Navbar from "../component/navbar"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { logoutUser } from "../store/action/userAction"


function TablePass() {
    const history = useHistory()
    const dispatch = useDispatch()

    const { passw, isLoading } = useSelector(state => state.pass)

    console.log("inipassw",passw)

    useEffect(() => {
        dispatch(fetchPass())
    },[])

 

    // console.log(isLoading)
    console.log(passw.data)

    // if (isLoading){
    //     return (<h1>Loading</h1>) 
    // } else {

    const gotoCreate = () => {
        history.push("/add-site")
    }

    // const gotoLogin = () =>{
    //     history.push("/login")
    // }

    // const gotoUpdate = () =>{
    //     history.push("/updatePass/:pass_id")
    // }

        return(
            <>
                <Navbar/>
                <div className="container-fluid fluid-page site-table-container">
                    <div className="container">
                        <div className="row btn-container">
                            <div className="col-sm-5">
                                <h1 className="display-5 accent-title">
                                    Your Saved Site Passwords
                                </h1>
                                <br />
                                <button class="primary" onClick={gotoCreate}>Add New Site</button>
                            </div>
                        </div>
                        <br />
                        <div className="row table-container">
                            <table class="table table-bordered align-middle site-table">
                                <thead>
                                    <tr>
                                        <th class="text-center">NO</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">Password</th>
                                        <th scope="col" colspan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {passw && passw.map((pass, index) => {
                                        return (
                                            <tr>
                                                <td class="text-center">{index + 1}</td>
                                                <td>{pass.webite}</td>
                                                <td>{pass.site_pass}</td>
                                                <td>
                                                    <button class="b-info btn-edit me-2" onClick={(e) => {
                                                        e.preventDefault()
                                                        history.push("/edit-site/" + pass.ID)
                                                    }}></button>
                                                    <button class="b-danger btn-trash" onClick={(e) => {
                                                        e.preventDefault()
                                                        dispatch(deletePass(pass.ID, history))
                                                        dispatch(fetchPass())
                                                    }}></button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    // }
}


export default TablePass