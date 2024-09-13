import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'',
                Component:HomePage
            },
            {
                path:'login',
                Component:LoginPage
            },
            {
                path:'register',
                Component:RegisterPage
            },
            {
                path:'forget-password',
                Component:ForgetPassword
            }
        ]
    }
])

