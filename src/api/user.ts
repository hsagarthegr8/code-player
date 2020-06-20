import api from './index'

const urls = {
    currentUser: 'accounts/me/',
}

export const getCurrentUserApi = async () => {
    const res = await api().get(urls.currentUser)
    return res.data
}
