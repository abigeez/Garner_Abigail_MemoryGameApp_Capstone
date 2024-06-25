import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LandingPage from './pages/LandingPage.jsx'
import CommentsPage from './pages/CommentsPage.jsx'
import AboutPage from './pages/aboutPage.jsx'
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
        element: <CommentsPage />
    },
    {
        path: "instructions",
        element: <AboutPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
