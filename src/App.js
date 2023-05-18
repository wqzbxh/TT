import logo from './logo.svg';
import './App.css';
import React,{ Component } from "react"
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Home from './pages/home/home';
import Settings from './pages/setting/setting';
import Project from './pages/project/project';
import Track from './pages/tracker/track';
import Team from './pages/team/team';
import Customer from './pages/customer/customer';
import Statistics from './pages/statistics/statistics';
import ProjectReport from './pages/statistics/project_report';
import { IntlProvider  } from 'react-intl';
import messages from './public/locales'
import Planne from './pages/Planne/planne';
import PlanneTime from './pages/Planne/planne time';
import PlanneTask from './pages/Planne/planne task';

export default class App extends Component{
  render(){
      return (
        <IntlProvider locale="en" messages={messages['CN']}>
          <BrowserRouter>
              <Routes>
                  <Route path="/login" Component={Login}></Route>
                    <Route path="/" Component={Admin} exact>
                        <Route path="/admin" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/setting" element={<Settings />} />
                        <Route path="/tracker" element={<Track />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/planne" element={<Planne />} />
                        <Route path="/planne_time" element={<PlanneTime />} />
                          <Route path="/planne_task" element={<PlanneTask />} />
                        <Route path="/customer" element={<Customer />} />
                        <Route path="/statistics" element={<Statistics />} />
                        <Route path="/project_report" element={<ProjectReport />} />
                  </Route>
              </Routes>
          </BrowserRouter>
        </IntlProvider>
      )
  
  }
}
