import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import ErrorPage from "./pages/error-page";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);