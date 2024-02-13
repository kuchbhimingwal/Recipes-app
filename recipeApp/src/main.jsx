import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { recipeData } from './data/Data.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RecipePage from './components/RecipePage/RecipePage.jsx'
import Fav from './components/Fav/Fav.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route loader={recipeData} path='' element={<Home />} />
      <Route loader={recipeData} path='recipepage/:cardid' element={<RecipePage />} />
      <Route loader={recipeData} path='favlist' element={<Fav />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
