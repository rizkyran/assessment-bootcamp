const initState = {
    passw : [],
    pass : null,
    isLoading : false,
    error : null
}

const passReducer = (state = initState, action) => {
    switch(action.type) {
        case "GET_SITE":
            return { ...state, isLoading : true}
        case "FETCH_PASS":
            return { ...state, isLoading: false, passw : action.payload}
        case "ADD_SITE":
            return { ...state, isLoading:false, pass : action.payload}
        case "ALTER_SITE":
            return { ...state, isLoading:false, pass : action.payload}
        case "DELETE_SITE":
            return { ...state, isLoading:false, pass : null}
        case "ERROR_SITE":
            return { ...state, isLoading: false}
        default:
            return state
    }
}

export default passReducer