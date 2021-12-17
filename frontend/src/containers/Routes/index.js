import Dashboard from "../Dashboard";
import Article from "../Article";
import Category from "../Category";
import CV from "../Upload_CV";
import Signup from "../Signup";
import Login from "../Login";


export const private_routes = [
    {
        component: Dashboard,
        path: "/dashboard",
        exact: true
    },
    {
        component: Article,
        path: "/article",
        exact: true
    },
    {
        component: Category,
        path: "/category",
        exact: true
    },
    {
        component: CV,
        path: "/upload_cv",
        exact: true
    },
]

export const public_routes = [
    {
        component: Signup,
        path: "/signup",
        exact: true
    },
    {
        component: Login,
        path: "/login",
        exact: true
    }
]