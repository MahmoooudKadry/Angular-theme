import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Notfound from './Components/Notfound/Notfound'
import Portfolio from './Components/Portfolio/Portfolio'

let routers = createBrowserRouter(
  [
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'About',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>}
    ]}
  ]
  )

export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}
