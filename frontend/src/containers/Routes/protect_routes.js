import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';

import { public_routes, private_routes} from './index';

export const ProtectedRoute =()=>{
    const cookie = new Cookies()
    const access_token = cookie.get("access_token")
    if (access_token === undefined){
        console.log("disini euy");
        localStorage.setItem("bt_is_login", "false")
        return {
            data: undefined,
            routes: public_routes
        }
    }

    // valid ga tokennya, 
    try {
        //checking jwt
        // valid ga tokennya, udah expired belom
        const data = jwtDecode(access_token)
        console.log(data);
        localStorage.setItem("bt_is_login", "true")  // ga pake
        return {
            data,
            routes: private_routes
        }       
    }catch {
        localStorage.setItem("bt_is_login", "false") // gapake 
        console.log("ERROR AUTH")
        return {
            data: undefined,
            routes: public_routes
        }
    }
}