import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Home} from "./pages/Home";
import ErrorPage from "./pages/error-page";
import { Recipe} from "./pages/Recepie";
import {Category} from "./pages/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/homepage',
        element: <Home/>,
    },
    {
        path: '/category/:name',
        element: <Category/>,
    },
    {
        path:'/recipe/:id',
        element:<Recipe/>,
    }
],{basename:'/react-food-project'})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);