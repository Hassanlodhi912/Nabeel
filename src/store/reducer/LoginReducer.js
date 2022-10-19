import { ActionTypes } from "../constant/Action-Types"

const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    hassan:false
    
    

}
export const loginReducer = (state=initialState,action)=>
{
   switch (action.type){
        case ActionTypes.SET_LOGIN:
            return action.payload
         case ActionTypes.SET_LOGIN:
                return {
                    ...state,
                    hassan:true
                }
            

        default:
                return state;
            }
         }
