import React from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Editprofile from './Pages/Editprofile'
import Userpage from './Pages/Userpage'
import Message from './Pages/Message'
import Chatting from './Pages/Chatting'






function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/sign-up' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/edit-profile' element={<Editprofile/>}></Route>
        <Route path='/user-page' element={<Userpage/>}></Route>
        <Route path='/message' element={<Message/>}></Route>
        <Route path='/chatting' element={<Chatting/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App