import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LandingPage from './pages/landingpage.jsx'
import CommentsPage from './pages/commentsPage.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "playgame",
        element: <App />
    },
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "reviews",
        element: 
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
