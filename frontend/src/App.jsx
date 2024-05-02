import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser}=useAuthContext()
  console.log(authUser)
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
      <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route path='/login' element={authUser ? <Navigate to='/' />:<Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' />:<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App

{/* <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button> 
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>}/>
        <Route path='/login' element={authUser ? <Navigate to='/' />:<Login/>}/>
        <Route path='/signup' element={authUser ? <Navigate to='/' />:<SignUp/>}/>*/}