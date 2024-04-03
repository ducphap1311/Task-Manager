import * as request from '../utils/request'

export const updateService = async (id: any, option={}) => {
    try {
        const res = await request.patch(`/todos/${id}`, option)
        return res;
    } catch (error) {
        console.log(error);
        
    }
}