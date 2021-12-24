import service from "./service";
import {Login} from "../../constant";

export const login = (data)=>{
    return service.postNoAuth(Login, data)
}
export const logout = ()=>{
    return service.post(getEndPoints.balanceTracker + `/api/logout`)
}