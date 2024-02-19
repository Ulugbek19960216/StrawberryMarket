import React from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Register from './user/Register';
import Login from "./user/Login";
import VerifyEmail from "./user/ConfirmationEmail";
import Homepage from "./pages/Homepage";
import ForgotPassword from './user/ForgotPassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Login/>}/>
      <Route  path="signup" element={<Register/>}/>
      <Route path="ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="verifyEmail" element={<VerifyEmail/>}/>
      <Route path="Homepage" element={<Homepage/>}/>
    </Route>
  )
)

function App() {
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App