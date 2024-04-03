import * as request from '../utils/request'

export const getAll = async () => {
    try {
        const res = await request.get('/todos')
        return res;
    } catch (error) {
        console.log(error);
        console.log(error);
        
    }
}