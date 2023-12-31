import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import LoginFace from './pages/LoginFace'
import RegisterFace from './pages/RegisterFace'
import Protected from './components/config/Protected'
import Auth from './components/config/Auth'
import NotFound from './pages/NotFound'
import ConfirmationReg from './pages/ConfirmationReg'
import ConfirmationLog from './pages/ConfirmationLog'

function App() {

  return (
    <div className="font-poppins bg-primary ">
      <Routes>
        <Route path='/notfound' element={<NotFound/>} />
        <Route element={<Auth/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Route>
        <Route element={<Protected/>}>
          <Route path='/confirmReg' element={<ConfirmationReg/>}></Route>
          <Route path='/confirmLog' element={<ConfirmationLog/>}></Route>
          <Route path='/registerScan' element={<RegisterFace/>}></Route>
          <Route path='/loginScan' element={<LoginFace/>}></Route>
          <Route path='/success' element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
