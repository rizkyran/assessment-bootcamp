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

export const login = (payload) => {
    return async (dispatch) => {
        
    }
}

export const logout = (payload) => {
    return async (dispatch) => {
        
    }
}
