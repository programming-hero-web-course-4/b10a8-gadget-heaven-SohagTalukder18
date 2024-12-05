import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Dashbord from './components/Dashbord/Dashbord';
import ProductDatail from './components/ProductDatail/ProductDatail';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root ></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
       
      },
      {
        path: 'about',
        element: <About></About>,
       
      },
      {
        path: 'dashbord',
        element: <Dashbord></Dashbord>,
        loader: () => fetch('/JsonData.json')
      },
      {
        path: 'products/:product_id',
        element: <ProductDatail></ProductDatail>,
        loader: () => fetch('/JsonData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
