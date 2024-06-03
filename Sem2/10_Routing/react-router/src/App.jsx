import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './screens/home.jsx'
import Login from './screens/login.jsx'
import Header from './Header.jsx'
import Profile from './screens/profile.jsx'
import Setting from './screens/setting.jsx'
function App() {

  const[fullName, setFullName] = useState("Hello world")



  return (
    <div className="reactApp">
      <Header />
      <h1>Hello World</h1>

      {/* Lesson 10 */}
      {/* <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile/>} />
          <Route path='/setting' element={<Setting/>}></Route>
      </Routes> */}
    </div>
  )
}

export default App
