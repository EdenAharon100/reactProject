import axios from "axios"

let baseUrl = "https://nodejsproject-lggn.onrender.com/api/wine"

export const getWine = (page,perPage,search) =>{
    return axios.get(`${baseUrl}/?page=${page}&perPage=${perPage}&search=${search}`)
}

export const deleteWine = (_id,token) => {
    return axios.delete("https://nodejsproject-lggn.onrender.com/api/wine/"+_id,{headers:{"x-access-token":token}})
}

export const addWine = (wine,token) => {
    return axios.post(`${baseUrl}`,wine,{headers:{"x-access-token":token}})
}

export const getTotalWine= () =>{
    return axios.get(baseUrl)
}
export const getWineById = (_id) =>{
    return axios.get(`${baseUrl}/${_id}`)
}

export const updateWine  = (_id,wine,token) => {
    const headers = { 'x-access-token': token, };
    
      return axios.put(`${baseUrl}/${_id}`, wine, { headers });

}