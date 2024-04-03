import axios from 'axios'

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const get = async (path: string, option = {}) => {
    const response = await request.get(path, option)
    return response.data
}

export const post = async (path: string, option={}) => {
    const response = await request.post(path, option)
    return response.data
}

export const deleteOne = async(path: string, option={}) => {
    const response = await request.delete(path, option)
    return response.data
}

export const patch = async (path: string, option={}) => {
    const response = await request.patch(path, option)
    return response.data
}

