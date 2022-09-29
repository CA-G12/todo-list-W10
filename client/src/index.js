import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from "./Components/signUp/signUp.jsx";
import SignIn from "./Components/SignIn/SignIn";
import Profile from "./Components/profile/profile";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/user/sign-up",
    element: <SignUp/>
  },
  {
    path: "/user/sign-in",
    element: <SignIn />
  },
  {
    path: "/user/profile",
    element:  <Profile/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);