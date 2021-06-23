import api from '../../api/api'

export const register = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ type: "USER_LOADING" })

            const { data } = await api({
                method : "POST",
                url : "/user/register",
                data : payload
            })

            // console.log(data)

            return dispatch({ type: "USER_REGISTER", payload : data })
        } catch (ex) {
            console.log(ex.response)
        }
    }
}

export const login = (payload, history) => {
    return async (dispatch) => {
        try {
            dispatch ({type : "USER_LOADING"})

            const {data} = await api ({
                method : "POST",
                url : "/user/login",
                data: payload
            })

            localStorage.setItem("apitoken", data.data.authorization)

            history.push("/user/site")

            return dispatch({ type : "USER_LOGIN", payload : data})


        } catch(err) {
            dispatch({type : "USER_ERROR", payload : err})
        }
    }
}

export const logout = () => ({
    type : "LOGOUT_USER"
})
