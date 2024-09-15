import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/dashboard/profile";
import Categories from "./pages/dashboard/categories";
import Employies from "./pages/dashboard/employies";



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
            },
            {
                path:'dashboard',
                Component:MainLayout,
                children:[
                    {
                        path:'',
                        Component:Dashboard
                    },
                    {
                        path:'profile',
                        Component:Profile
                    },
                    {
                        path:'categories',
                        Component:Categories
                    },
                    {
                        path:'employies',
                        Component:Employies
                    },
                    
                    
                ]
            }
        ]
    }
])

