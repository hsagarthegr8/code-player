import api from './index'

const urls = {
    playground: 'playground/',
}

interface PlaygroundRequestBody {
    sourceCode: string
    isCustomInput: boolean
    customInput: string
}

export const playgroundApi = async (body: PlaygroundRequestBody) => {
    const res = await api().post(urls.playground, body)
    return res.data
}
