import React from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Register from './user/Register';
import Login from "./user/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Login/>}/>
      <Route  path="signup" element={<Register/>}/>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App