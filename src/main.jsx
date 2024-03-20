import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffe from './component/Addcoffe.jsx';
import Update from './component/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('http://localhost:8000/coffee')
  },
  {
    path:'/addcoffe',
    element:<Addcoffe></Addcoffe>
  },
  {
    path:"/updatecoffe/:id",
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:8000/coffee/65f2d766e950c7d5ac5ee673/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
