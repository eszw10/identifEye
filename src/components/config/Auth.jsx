import { Outlet, Navigate } from "react-router-dom"

const Auth = () => {
  if(window.localStorage.getItem('token')) {
    return <Navigate to='success'/>
  } else {
    return <Outlet/>
  }
}

export default Auth