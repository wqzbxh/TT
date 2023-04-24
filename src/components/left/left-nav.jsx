import React, { Component } from "react";
import {Link,useLocation} from "react-router-dom";
import menuList from "../../config/menuConfig";
class LeftNav extends Component {
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
  componentDidMount() {
    console.log('一般用在进入页面后，数据初始化');
    console.log(this.props);
    const {pathname} = this.props.location
    menuList.map((item,index)=>{
        if(item.href == pathname){
            this.setState({
                activeMenuIndex: index,
              });
        }
    })
  }
  render() {
  

    return (
        <div className="relative  rounded-3xl bg-gradient-to-b from-gray-900 to-gray-900  to-gray-800  text-center bg-white w-full lg:w-48  py-6 shadow-lg lg:sticky lg:top-0 lg:h-screen">
        <h2 className="text-sm font-bold  mb-4  text-white">TimeTrackerASC Visio</h2>
        <ul>
            {menuList.map((item, index) => (
                <li className="py-4" key={index}>
                    <Link to={item.href}
                        className={`px-6 py-3 font-thin text-white rounded-xl mx-4 hover:text-gray-800 flex hover:bg-blue-500 items-center ${this.state.activeMenuIndex === index ? "bg-blue-600" : ""
                            }`}
                        onClick={() => this.handleMenuClick(index)}
                    >
                        <span className={`jinxing iconfont icon-${item.icon}`}></span>
                        <span className="ml-2">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
        <div className="text-center">
            <span className="text-white absolute  bottom-0 left-1/2 text-xs transform -translate-x-1/2 -translate-y-1/2 ">
                TimeTracker - ASC Vision v 0.1
            </span>
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
