import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import menuList from "../../config/menuConfig";
import localstorageUnits from "../../utils/localstorageUnits";
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuIndex: 0,
      activeSubMenuIndex: '',
      collapsedMenus: [], // 用于存储折叠的菜单项
    };
  }

  handleMenuClick = (event, index, path, label,pIndex) => {
    // 点击菜单项时设置当前选中的菜单项
    const parentMenu = this.findParentMenuByChild(menuList, label);
    if (parentMenu) {
      this.setState({
        activeMenuIndex: pIndex,
        activeSubMenuIndex: label,
      });
      // 缓存当前的子菜单路由的lable
      localstorageUnits.savePath({ currentChildrenActivePath: label });
      localstorageUnits.savePath({ currentActiveIndex: pIndex });

    } else {
      localstorageUnits.savePath({ currentActiveIndex: index });
      localstorageUnits.savePath({ currentChildrenActivePath: '' });
      const ChildMenu = this.findChildMenuByParent(menuList, label);
      console.log(ChildMenu)
      if(!ChildMenu){
        this.setState({
          activeMenuIndex: index,
          activeSubMenuIndex: '',
        });
      }
      this.setState((prevState) => {
        const { collapsedMenus } = prevState;
        const menuIndex = collapsedMenus.indexOf(index);
        // 如果菜单已经存在于 collapsedMenus 中，则移除它
        // 否则，将其添加到 collapsedMenus 中
        if (menuIndex !== -1) {
          collapsedMenus.splice(menuIndex, 1);
        } else {
          collapsedMenus.push(index);
        }
        localstorageUnits.savePath({ collapsedMenus: collapsedMenus });
        return {
          collapsedMenus: [...collapsedMenus],
        };
      });
      
    }
  };

  findParentMenuByChild = (menuItems, childLabel) => {
    for (let i = 0; i < menuItems.length; i++) {
      const parentMenu = menuItems[i];
      if (
        parentMenu.children &&
        parentMenu.children.some((child) => child.label === childLabel)
      ) {
        return parentMenu;
      }
    }
    return null; 
  };

  findChildMenuByParent = (menuItems, parentLable) => {
    for (let i = 0; i < menuItems.length; i++) {
      const parentMenu = menuItems[i];
      if( parentMenu['label'] === parentLable && parentMenu.children && parentMenu.children.length>0){
        console.log(parentMenu)
        return true;
      }
    }
    return false; 
  };

  /**
   * 初始化渲染页面
   * 加载左菜单
   *
   */
  componentDidMount() {
      let storagePath = localstorageUnits.getPath();
      console.log(storagePath)
      if(storagePath && Object.keys(storagePath).length > 0){
        this.setState({
          activeMenuIndex: storagePath.currentActiveIndex,
          activeSubMenuIndex: storagePath.currentChildrenActivePath,
          collapsedMenus:storagePath.collapsedMenus
        });
      }
  }
  
  renderSubMenu = (subMenu,pIndex) => {
    return (
      <ul>
        {subMenu.map((item, index) => (
          <li   onClick={(event) => this.handleMenuClick(event,index, item.href, item.label,pIndex)}  className={ ` rounded mx-8 py-2 my-3 ${
            this.state.activeSubMenuIndex === item.label
              ? "bg-transparent bg-gradient-to-br  from-customize-dark-42 to-customize-secondary-1  transform rotate-15 text-white"
              : " text-white  hover:bg-opacity-5 "}`} key={index}>
            <Link to={item.href}   >
              <span className={`jinxing iconfont icon-${item.icon}`}></span>
              <span className="ml-2">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const { collapsedMenus } = this.state;
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
              <li className="py-2 cursor-pointer" key={index}>
                {item.children && item.children.length > 0 ? (
                  <span
                    to={item.href}
                    className={`px-6  py-2 transition ease-in-out   text-sm transform hover:-translate-y-1 hover:scale-110 rounded mx-4  flex hover:bg-gradient-to-b from-customize-blue-49 to-customize-blue-1a  items-center ${
                      this.state.activeMenuIndex === index
                        ? "bg-transparent bg-gradient-to-br  from-customize-blue-49 to-customize-blue-1a    transform rotate-15 text-white"
                        : " text-white  hover:bg-opacity-5 "
                    }`}
                    onClick={(event) =>
                      this.handleMenuClick(event, index, item.href, item.label)
                    }
                  >
                    <span
                      className={`jinxing iconfont icon-${item.icon}`}
                    ></span>
                    <span className="ml-2">{item.label}</span>
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className={`  cursor-pointer px-6  py-2 transition ease-in-out   text-sm transform hover:-translate-y-1 hover:scale-110 rounded mx-4  flex hover:bg-gradient-to-b from-customize-blue-49 to-customize-blue-1a  items-center ${
                      this.state.activeMenuIndex === index
                        ? "bg-transparent bg-gradient-to-br  from-customize-blue-49 to-customize-blue-1a    transform rotate-15 text-white"
                        : " text-white  hover:bg-opacity-5 "
                    }`}
                    onClick={(event) =>
                      this.handleMenuClick(event, index, item.href, item.label)
                    }
                  >
                    <span
                      className={`jinxing iconfont icon-${item.icon}`}
                    ></span>
                    <span className="ml-2">{item.label}</span>
                  </Link>
                )}
                <div>
                  {collapsedMenus.includes(index)
                    ? item.children && item.children.length > 0
                      ? this.renderSubMenu(item.children,index)
                      : ""
                    : ""}
                </div>
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
