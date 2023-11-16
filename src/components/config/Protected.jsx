import { Outlet, Navigate } from "react-router-dom"

const Protected = () => {
  if(window.localStorage.getItem('token')) {
    return <Outlet/>
  } else {
    return <Navigate to='/'/>
  }
}

export default Protected