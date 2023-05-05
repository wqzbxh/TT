import React, { Component } from "react";
import CreateProject from "../project/project_create";
import CreateCustomer from "../../pages/customer/customer_create";

class CreateTeamUserBtn extends Component {
  state = {
    isCustomerModal: false,
    isCreaterMedal: false,
  };

  /***********关闭编辑框 */
  /***********cLOSE the add box */
  closeCustomerData = () => {
    this.setState({
      isCustomerModal: false,
    });
  };
  /***********打开添加框 */
  /***********Open the add box */
  handleCreateCustomer = () => {
    this.setState({ isCustomerModal: true });
  };
  render() {
    const { page_title, dataList, isCustomerModal, isCreaterMedal } =  this.state;
    console.log(this.state.isCreaterMedal);
    return (
      <div className="rounded-2xl px-2">
        <div
          className="text-white text-sm px-2.5 py-2 border bg-customize-blue-49  hover:border-dashed  hover:bg-customize-blue-1a"
          onClick={this.handleCreateCustomer}
        >
          <span className="iconfont icon-xinzeng5"></span> &nbsp;&nbsp; Add TeamUser
        </div>
        <CreateCustomer
          isVisible={isCustomerModal}
          closeModal={this.closeCustomerData}
        />
      </div>
    );
  }
}

export default CreateTeamUserBtn;
