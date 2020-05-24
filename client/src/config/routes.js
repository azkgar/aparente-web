import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

import Home from "../pages/Home";

import Error404 from "../pages/Error404";

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default routes;