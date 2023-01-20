
import React from 'react'
import './App.css';
import Home from "./Component/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Component/SignUp';
import Login from './Component/Login'
import Navbar from './Component/Navbar'
import Feeds from './Routes/Feed/Feeds';
import Completepost from './Component/Post/Completepost';
import Navigation from './Component/Navigation';
import ListUser from './Component/ListUser';

const isAdmin = true;
export default function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Navbar/>} >
       <Route index element={<Home />} />
        
        <Route  path="/signup" element={<SignUp/>}/>
        <Route  path="/login" element={<Login/>}/>
        </Route>
      </Routes>
      <Routes>
      <Route path='/users' element={<Navigation />} >
      <Route index path='/users/feeds' element={<Feeds />} />
      <Route path='/users/comments' element={<Completepost />} />
     
      </Route>
      {/* <Route path='/admin/list' element={<ListUser />} /> */}
      <Route path='/admin/list' element={isAdmin ?<ListUser />: <h1>Not Allowed</h1>} />
      </Routes>
      
    </Router>
  )
}
