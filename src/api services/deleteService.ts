import * as request from '../utils/request'

export const deleteService = async (id: any) => {    
    try {
        const res = await request.deleteOne(`/todos/${id}`)        
        return res
    } catch (error) {
        console.log(error);
        
    }
}