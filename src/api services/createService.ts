import * as request from '../utils/request'

export const createService = async (option={}) => {
    try {
        const res = await request.post('/todos', option)
        return res
    } catch (error) {
        console.log(error);
        
    }
}