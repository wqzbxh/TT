import logo from './logo.svg';
import './App.css';
import React,{ Component } from "react"
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Home from './pages/home/home';
import Settings from './pages/setting/setting';
import Project from './pages/project/project';


export default class App extends Component{
  
  render(){
      return (
          <BrowserRouter>
              <Routes>
                  <Route path="/login" Component={Login}></Route>
                    <Route path="/" Component={Admin} exact>
                        <Route path="/admin" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/setting" element={<Settings />} />
                        <Route path="/projects" element={<Project />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      )
  
  }
}
