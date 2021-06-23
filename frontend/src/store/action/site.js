import api from '../../api/api'

const apiToken = !localStorage.getItem("apitoken") ? "" : localStorage.getItem("api_token")

export const getPass = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "SITE_LOADING" })

            const { data } = await api({
                method : "GET",
                url : "/user/site",
                headers : {
                    "authorization" : apiToken
                }
            })

            // console.log(data)

            return dispatch({ type: "GET_SITE", payload : data })
        } catch (ex) {
            dispatch({type : "ERROR_SITE"})
            console.log(ex.response.data)
        }
    }
}

export const addSite = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({type : "SITE_LOADING"})

            const { data } = await api({
                method : "POST",
                url : "/user/site",
                data : payload,
                headers : {
                    "authorization" : apiToken
                }
            })

            return dispatch({ type: "ADD_SITE", payload : data })
        } catch (ex) {
            dispatch({type : "ERROR_SITE"})
            console.log(ex.response.data)
        }
    }
}

export const alterPass = (id, payload) => {
    return async (dispatch) => {
        try {
            dispatch({type : "SITE_LOADING"})

            const { data } = await api({
                method : "PUT",
                url : `/user/site/${id}`,
                data : payload,
                headers : {
                    "authorization" : apiToken
                }
            })

            return dispatch({ type : "ALTER_SITE", payload : data})

        } catch(err) {
            dispatch({ type : "ERROR_SITE"})
            console.log(err.response.data)
        }
    }
}

export const deletePass = (id, history) => {
    return async (dispatch) => {
        try {
            dispatch({type : "SITE_LOADING"})

            const { data } =  await api({
                method : "DELETE",
                url : `/user/site/${id}`,
                headers : {
                    "authorization" : apiToken
                }
            })
            history.push("/user/site")

            console.log(data)

           return dispatch({ type : "DELETE_SITE", payload : data})
        } catch(err) {
            dispatch({ type : "ERROR_SITE"})
            console.log(err.response.data)
        }
    }
}