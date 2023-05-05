import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom';
import Home from "../home/home";
import Settings from "../setting/setting";
import LeftNav from "../../components/left/left-nav";
import './admin.css'
import Project from "../project/project";
import Track from "../tracker/track";
import Team from "../team/team";
import Customer from "../customer/customer";
import Statistics from "../statistics/statistics";
import HeaderNav from "../../components/header/header";
import ProjectReport from "../statistics/project_report";
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
            <div className="bg-gray-100 h-screen  text-sm" >
                <div className="flex flex-col  lg:flex-row">
                    {/* 左菜单 */}
                    <LeftNav  />
                    {/* 右边内容 */}
                   
                    <div className="flex-1  py-0 lg:sticky lg:top-0 lg:h-screen ">
                    <div className=" px-3 relative  mx-auto font-thin  w-full lg:sticky lg:top-0 lg:h-screen overflow-y-auto ">
                      <HeaderNav />
                        {/* <h1 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h1> */}
                            <Routes>
                                <Route path=""  Component={Home}></Route>
                                <Route path="/admin" element={<Home />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/setting" element={<Settings />} />
                                <Route path="/tracker" element={<Track />} />
                                <Route path="/projects" element={<Project />} />
                                 <Route path="/team" element={<Team />} />
                                <Route path="/customer" element={<Customer />} />
                                <Route path="/statistics" element={<Statistics />} />
                                <Route path="/project_report" element={<ProjectReport />} />
                                
                            {/*<Route path="/create_project" element={<CreateProject />} />
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
