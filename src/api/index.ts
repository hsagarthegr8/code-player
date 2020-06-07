import axios, { AxiosInstance } from 'axios'

const api = (): AxiosInstance => {
    return axios.create({
        baseURL: 'http://localhost:8000/api/',
    })
}

export default api()
