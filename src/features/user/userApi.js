import axios from "axios"

let baseUrl = "https://nodejsproject-lggn.onrender.com/api/user"

export const login = (userName) =>{
    return axios.post(`${baseUrl}/login`,userName)
}
export const getAllUsers = ()=>{
    return axios.get(`${baseUrl}`)
}
export const addUser = (userName)=>{
    return axios.post(`${baseUrl}`,userName)
}