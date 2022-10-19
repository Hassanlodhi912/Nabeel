import { ActionTypes } from "../constant/Action-Types"

export const login = (data) =>{
    return{
        type:ActionTypes.SET_LOGIN,
        payload : data
    }

}