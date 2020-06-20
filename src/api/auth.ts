import api from './index'

const urls = {
    login: 'login/',
}

interface LoginRequestBody {
    username: string
    password: string
}

export const loginUserApi = async (body: LoginRequestBody) => {
    const res = await api().post(urls.login, body)
    return res.data
}
