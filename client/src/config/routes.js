//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminMenuWeb from "../pages/Admin/MenuWeb";
import AdminBlog from "../pages/Admin/Blog";
import AdminCategories from "../pages/Admin/Categories";

//User Pages
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogCategories from "../components/Web/Blog/Categories";
import Contact from "../pages/Contact";
import Us from "../pages/Us";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

//Error Page
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
                path: "/admin/users",
                component: AdminUsers,
                exact: true
            },
            {
                path:"/admin/menu",
                component: AdminMenuWeb,
                exact: true
            },
            {
                path:"/admin/blog",
                component: AdminBlog,
                exact: true
            },
            {
                path:"/admin/categorias",
                component: AdminCategories,
                exact: true
            },
            {
                component: Error404  
            }
        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/blog",
                component: Blog,
                exact:true
            },
            {
                path: "/blog/:url",
                component: Blog,
                exact: true
            },
            {
                path: "/categorias",
                component: BlogCategories,
                exact: true
            },
            {
                path: "/categorias/:tag",
                component: BlogCategories,
                exact: true
            },
            {
                path: "/contacto",
                component: Contact,
                exact: true
            },
            {
                path: "/nosotros",
                component: Us,
                exact: true
            },
            {
                path: "/terminos-y-condiciones",
                component: TermsConditions,
                exact: true
            },
            {
                path: "/aviso-de-privacidad",
                component: PrivacyPolicy,
                exact: true
            },
            {
                component: Error404  
            }
        ]
    }
]

export default routes;