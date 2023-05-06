import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import menuList from "../../config/menuConfig";
import localstorageUnits from "../../utils/localstorageUnits";
class LeftNav extends Component {
  constructor(props) {
    super(props);
    // 初始状态为第一个菜单项选中
    this.state = {
      activeMenuIndex: 0,
    };
  }

  handleMenuClick = (index,path) => {
    // 点击菜单项时设置当前选中的菜单项
    localstorageUnits.savePath({'currentActivePath':path});
    this.setState({
      activeMenuIndex: index,
    });
  };
  componentDidMount() {
    let { pathname } = this.props.location;
    // 检查当前URI是不是菜单的URI，是filteredItems则为非空数组，不是则进行读取缓存上一次的URI进行添加Active样式
    const filteredItems = menuList.filter(item => item.href.includes(pathname));
    if(filteredItems.length === 0){
      let storagePath = localstorageUnits.getPath();
      pathname = storagePath.currentActivePath
    }
    // eslint-disable-next-line array-callback-return
    menuList.map((item, index) => {
      if (item.href === pathname) {
        this.setState({
          activeMenuIndex: index,
        });
      }
    });
  }
  render() {
    return (
      <div className="divide-y">
        <div className="relative  rounded-3xl font-thin bg-gradient-to-b from-customize-dark-42  to-customize-dark-19 transform rotate-15 text-center w-full heigh96 mt-4 ml-4 lg:w-56 py-6 shadow-lg ">
          <div className="">
            <p className="text-2xl font-semibold  text-white ">TimeTracker</p>
            <p className="text-xs font-semibold  mb-4   text-white ">
              ASC Visio
            </p>
          </div>
          <div className="tt-drvider"></div>
          <ul>
            {menuList.map((item, index) => (
              <li className="py-2" key={index}>
                <Link
                  to={item.href}
                  className={`px-6  py-2 transition ease-in-out   text-sm transform hover:-translate-y-1 hover:scale-110 rounded mx-4  flex hover:bg-gradient-to-b from-customize-blue-49 to-customize-blue-1a  items-center ${
                    this.state.activeMenuIndex === index
                      ? "bg-transparent bg-gradient-to-br  from-customize-blue-49 to-customize-blue-1a    transform rotate-15 text-white"
                      : " text-white  hover:bg-opacity-5 "
                  }`}
                  onClick={() => this.handleMenuClick(index,item.href)}
                >
                  <span className={`jinxing iconfont icon-${item.icon}`}></span>
                  <span className="ml-2">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <span className="absolute  text-white bottom-0 left-1/2 text-xs transform -translate-x-1/2 -translate-y-1/2 ">
              TimeTracker - ASC Vision v 0.1
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function LeftNavUpgrade() {
  const location = useLocation();
  return <LeftNav location={location} />;
}

export default LeftNavUpgrade;
