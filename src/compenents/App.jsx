import React from 'react'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Register from './user/UserRegister/Register';
import Login from "./user/Login";
import VerifyEmail from "./user/EmailVerification/EmailVerificationPage";
import Homepage from "./pages/Homepage";
import ForgotPassword from './user/ForgotPassword';
import CreatePassword from "./user/CreateNewPassword/CreatePassword";
import Location from "./user/LocationSearch/LocationSearch";
import InterestCategory from "./user/InterestCategory/MainIntersts";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<Login/>}/>
      <Route  path="signup" element={<Register/>}/>
      <Route path="passwordRecovery" element={<ForgotPassword/>}/>
      <Route path="verifyEmail" element={<VerifyEmail/>}/>
      <Route path="verifyEmail/createPassword" element={<CreatePassword/>}/>
      <Route path="locationSearch" element={<Location/>}/>
      <Route path="Homepage" element={<Homepage/>}/>
      <Route path="interestCategory" element={<InterestCategory/>}/>
    </Route>
  )
)

function App() {
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App;