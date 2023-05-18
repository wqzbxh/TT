import React, { Component } from "react";
import CreateProject from "../project/project_create";
import CreateCustomer from "../../pages/customer/customer_create";

class BtnCustomize extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }


  /***********提交信息接口 */
  /***********cLOSE the add box */
  
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.btnHandleCommit();
    }
  }
  
  btnHandleCommit = () => {
    this.props.btnHandleCommit();
  };

  render() {
    const { btnText } = this.props;
    return (
      <div className="">
        <button
          className="flex w-auto  text-white text-sm px-2.5 py-2 border bg-transparent bg-gradient-to-br from-customize-blue-49 to-customize-blue-1a  transform rotate-15 rounded  hover:bg-gray-400"
          onClick={this.btnHandleCommit}  onKeyDown={this.handleKeyPress}
        >
          <div className="mr-1"><span className="iconfont icon-baocun"></span></div>
          <div><span>{btnText}</span></div>


        </button>
      </div>
    );
  }
}

export default BtnCustomize;
