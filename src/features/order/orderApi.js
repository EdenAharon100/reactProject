import axios from "axios";

let baseUrl = "https://nodejsproject-lggn.onrender.com/api/order";

export const addOrder = (order,token) =>{
    return axios.post(`${baseUrl}`,order,{headers:{"x-access-token":token}})
}
export const getAllOrders = (token) =>{
    return axios.get(`${baseUrl}`,{headers:{"x-access-token":token}})
}

export const updateOrder = (id, token) =>{
    return axios.put(`${baseUrl}/${id}`, {isDone:true},{headers:{"x-access-token":token}});
}
