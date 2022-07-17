import API from '../API'
import axios from '../middleware'

export const postExample = (json) =>{
    return axios.post(
        API + "/example", json, 
        {
            headers:{
                "Content-Type": `application/json`
            }
        }
    ).then(res=>{
        return res
    }).catch(err=>{
        return err.response
    })
}