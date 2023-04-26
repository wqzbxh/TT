import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom';
import Home from "../home/home";
import logo from '../../public/image/logo.png';
import Settings from "../setting/setting";
import LeftNav from "../../components/left/left-nav";
import './admin.css'
import Project from "../project/project";
import Track from "../tracker/track";
import Team from "../team/team";
class Admin extends Component {
    constructor(props) {
        super(props);

        // 初始状态为第一个菜单项选中
        this.state = {
            activeMenuIndex: 0,
        };
    }

    handleMenuClick = (index) => {
        // 点击菜单项时设置当前选中的菜单项
        this.setState({
            activeMenuIndex: index,
        });
    };

    render() {
     
        return (
            <div className="bg-gray-100 h-screen px-3" >
                <div className="flex flex-col  lg:flex-row">
                    {/* 左菜单 */}
                    <LeftNav  />
                    {/* 右边内容 */}
                   
                    <div className="flex-1  py-0 lg:sticky lg:top-0 lg:h-screen ">
                    <div className=" px-3 relative  mx-auto font-thin  w-full lg:sticky lg:top-0 lg:h-screen overflow-y-auto ">
                        <div className="px-3 flex   text-center items-center  flex-row-reverse mx-auto  h-16 mx-auto font-thin  ">
                        <div className="mx-2">
                            <img className="rounded-full h-12 w-12 flex items-center justify-center  bg-blue-50 " src={logo} alt="" />
                        
                         </div>
                          <div className="mx-2">
                          </div>
                          <div className="mx-2">
                            <div className="w-full border-b-2  border-gray-900 text-gray-900 py-2 px-4  focus:outline-none focus:ring-2 ">Haiyang</div>     
                          </div>
                        </div>
                        {/* <h1 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h1> */}
                            <Routes>
                                <Route path=""  Component={Home}></Route>
                                <Route path="/admin" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/setting" element={<Settings />} />
                                <Route path="/tracker" element={<Track />} />
                                <Route path="/projects" element={<Project />} />
                                 <Route path="/team" element={<Team />} />
                           {/*  <Route path="/orga" element={<Orga />} />
                            <Route path="/create_project" element={<CreateProject />} />
                            <Route path="/edit_project" element={<EditProject />} />
                            <Route path="/all_project_report" element={<AllProjectReport />} />
                            <Route path="/project_report" element={<ProjectReport />} />
                            <Route path="/employee_report" element={<EmployeeReport />} /> */}
                            </Routes>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Admin;
