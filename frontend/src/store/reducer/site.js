const initState = {
    sites : [],
    site : null,
    isLoading : false,
    error : null
}

const passReducer = (state = initState, action) => {
    switch(action.type) {
        case "SITE_LOADING":
            return { ...state, isLoading : true}
        case "GET_SITE":
            return { ...state, isLoading: false, sites : action.payload}
        case "ADD_SITE":
            return { ...state, isLoading:false, site : action.payload}
        case "ALTER_SITE":
            return { ...state, isLoading:false, site : action.payload}
        case "DELETE_SITE":
            return { ...state, isLoading:false, site : null}
        case "ERROR_SITE":
            return { ...state, isLoading: false}
        default:
            return state
    }
}

export default passReducer