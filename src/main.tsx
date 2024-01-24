import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import LoginPage from './auths/loginPages.tsx'
import Profile from './pages/Profile/index.tsx'
import SunnySide from './pages/SunnySide/index.js'
import Huddle from './pages/Huddle/index.jsx'
import Root from './Root.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[{
      path: "/",
      element: <LoginPage />,
      children: [{
        path: '/login',
        element: <LoginPage />
      }]
    }]
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/sunnyside",
    element: <SunnySide />,
  },
  {
    path: "/huddle",
    element: <Huddle />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
