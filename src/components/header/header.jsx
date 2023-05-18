import React, { Component } from "react";
import {  Navigate } from 'react-router-dom';

import logo from "../../public/image/logo.png";
import ErrorToast from "../../components/ErrorMessage";
import { regLogout } from "../../api";
import localstorageUnits from "../../utils/localstorageUnits";

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listD: [],
      showLogout: false, // 默认不显示退出按钮
    };
    this.loginOut = this.loginOut.bind(this);
  }
  loginOut=async ()=>{
      
    const response = await regLogout();
    const result = response.data;
    if (result.code === 200) {
        localstorageUnits.saveUser({});
        window.location.href='/login';
    } else {
        //登陆失败
        console.log(result)
        this.setState(prevState => ({
            listD: [...prevState.listD, { 'msg': result.msg, color: '#FF5733' }],
        }));
    }
  }

  render() {
    const {listD } = this.state;
    if (this.state.isLogout) {
      return <Navigate to="/login" />;
    }
    return (
      <>
        <div className="px-3 flex relative  text-center items-center  flex-row-reverse  h-16 mx-auto   ">
          <div className="mx-2">
            <img
              className="rounded-full h-12 w-12 flex items-center justify-center  bg-blue-50 "
              src={logo}
              alt=""
            />
          </div>
          <div className="mx-2"></div>
          <div
            className="h-16 py-4"
            onClick={() =>
              this.setState({ showLogout: !this.state.showLogout })
            } 
          >
            <div className="w-full  border-gray-900 text-gray-900 py-2 px-4  focus:outline-none focus:ring-2 cursor-pointer">
           
            Haiyang  <button className="transition duration-300 ease-in-out ..."><span className="iconfont icon-xuanzeqizhankai   text-xl"></span>   </button>
            </div>
          
          </div>
          {this.state.showLogout && (
          <div className="divide-y text-left absolute top-16 right-20 bg-white rotate-4 z-50   px-4  border cursor-pointer rounded-sm ">
              <div className="py-2 leading-5  rotate-4 ">
                <button onClick={this.loginOut} className="transition duration-300 ease-in-out ..."><span className="iconfont icon-tuichudenglu2 text-xl px-2"></span>Sign out</button>
              </div>
              {/* <div className="py-2">
               <Link to="/"><button className="transition duration-300 ease-in-out ..."><span className="iconfont icon-employees_icon text-xl px-2"></span>   </button></Link>
              </div> */}
          </div>
          )}
            <ErrorToast listdd={listD} upErrorListComback={this.upErrorList} />
        </div>
      </>
    );
  }
}

export default HeaderNav;
