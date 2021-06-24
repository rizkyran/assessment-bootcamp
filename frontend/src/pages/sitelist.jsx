import { deletePass, getPass } from "../store/action/site"
import Navbar from "../components/navbar"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { logout } from "../store/action/user"


function SiteList() {
    const history = useHistory()
    const dispatch = useDispatch()

    const { sites, isLoading } = useSelector(state => state.site)


    useEffect(() => {
        dispatch(getPass())
    }, [])

    const gotoCreate = () => {
        history.push("/site/create")
    }

    return (
        <div class="container-fluid fluid-page password-container">
            <Navbar />
            <div style={{ padding: "10%" }}>
                <button class="btn btn-primary" onClick={gotoCreate}>Create New Website</button>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th scope="col">Website</th>
                            <th scope="col">Password</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sites.data && sites.data.map((site, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{site.Webite}</td>
                                    <td>{site.Password}</td>
                                    <td>
                                        <button class="btn btn-warning" onClick={(e) => {
                                            e.preventDefault()
                                            history.push("/site/update/" + site.ID)
                                        }}>Update</button>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger" onClick={(e) => {
                                            e.preventDefault()
                                            dispatch(deletePass(site.ID, history))
                                            dispatch(getPass())
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            {/* <Footer/> */}
        </div>
    )
    // }
}


export default SiteList