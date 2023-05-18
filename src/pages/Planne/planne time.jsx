import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate,Link } from 'react-router-dom';
import Home from "../home/home";
import Settings from "../setting/setting";
import memoryUtils from "../../utils/memoryUtils";
import Track from "../tracker/track";
class PlanneTime extends Component {
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
        const user = memoryUtils.user;
        if (!user.username) {
          const userData = {};
          // 自动跳转登录
          return <Navigate to="/login" />;
        }
        return (
            <div className=" px-3 relative  mx-auto font-thin  w-full lg:sticky lg:top-0 lg:h-screen overflow-y-auto ">
                    掀起红盖123
            </div>
       
        );
    }
}
export default PlanneTime;
