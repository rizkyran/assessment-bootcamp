import Axios from "axios"

const api = Axios.create({
    baseURL : "http://localhost:8888"
})

export default api