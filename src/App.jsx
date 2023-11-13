import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Scanner from './pages/Scanner'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div className="font-poppins bg-primary ">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/scan' element={<Scanner/>}></Route>
        <Route path='/success' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default App
